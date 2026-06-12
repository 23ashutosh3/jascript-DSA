// Each node holds a key-value pair and pointers to previous/next nodes
// This forms our doubly linked list where:
//   - Front (after head) = most recently used
//   - Back (before tail)  = least recently used
class Node {
  constructor(key, value) {
    this.key = key;       // we store the key so we can delete it from the map during eviction
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Uses two data structures together:
//   1. HashMap  → gives O(1) lookup by key
//   2. Doubly Linked List → gives O(1) insert/remove to track usage order
//
// Visually:
//   HEAD <-> [most recent] <-> [middle] <-> [least recent] <-> TAIL
//    |            ^                              ^
//    |            |                              |
//   dummy     map.get(k1)                   map.get(k3)    <- map points directly to nodes
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();       // key → Node (for O(1) access to any node)

    // Dummy head and tail — they never hold real data.
    // They eliminate edge cases: every real node always has a valid .prev and .next
    // Without them, we'd need if-checks for "is this the first node?" / "is this the last node?"
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;   // head <-> tail (empty list)
    this.tail.prev = this.head;
  }

  // Unlink a node from wherever it sits in the list
  // Before: A <-> node <-> B
  // After:  A <-> B          (node is detached)
  _remove(node) {
    node.prev.next = node.next;   // A.next = B
    node.next.prev = node.prev;   // B.prev = A
  }

  // Insert a node right after head (making it the most recently used)
  // Before: HEAD <-> OLD_FIRST <-> ...
  // After:  HEAD <-> node <-> OLD_FIRST <-> ...
  _insertAfterHead(node) {
    node.next = this.head.next;       // node.next = OLD_FIRST
    node.prev = this.head;            // node.prev = HEAD
    this.head.next.prev = node;       // OLD_FIRST.prev = node
    this.head.next = node;            // HEAD.next = node
  }

  // O(1) — look up value by key, and mark it as most recently used
  get(key) {
    if (!this.map.has(key)) return -1;    // key doesn't exist

    const node = this.map.get(key);       // O(1) lookup from map

    // Move to front: detach from current position, re-insert at head
    // This marks it as "just used" so it won't be evicted soon
    this._remove(node);
    this._insertAfterHead(node);

    return node.value;
  }

  // O(1) — add or update a key-value pair
  put(key, value) {
    // If key already exists, remove the old node first (we'll create a fresh one)
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }

    // Create new node and place it at the front (most recently used)
    const node = new Node(key, value);
    this._insertAfterHead(node);
    this.map.set(key, node);              // store/update the map entry

    // If we exceeded capacity, evict the least recently used (node just before tail)
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;         // this is the LRU node
      this._remove(lru);                  // unlink from list
      this.map.delete(lru.key);           // remove from map (this is why Node stores key!)
    }
  }
}

// -------------------- Testing --------------------
// Capacity = 2, so only 2 items can live in cache at a time

const cache = new LRUCache(2);

cache.put(1, 1);                    // cache: [1]
cache.put(2, 2);                    // cache: [2, 1]
console.log(cache.get(1));  // 1    // cache: [1, 2]  — accessing 1 moves it to front

cache.put(3, 3);            // evicts key 2 (it's at the back now)  → cache: [3, 1]
console.log(cache.get(2));  // -1   // 2 was evicted, not found

cache.put(4, 4);            // evicts key 1 → cache: [4, 3]
console.log(cache.get(1));  // -1   // 1 was evicted
console.log(cache.get(3));  // 3    // cache: [3, 4]
console.log(cache.get(4));  // 4    // cache: [4, 3]

// Update existing key
cache.put(3, 30);                   // updates value of 3 and moves to front → cache: [3, 4]
console.log(cache.get(3));  // 30

// Capacity 1 edge case
const tiny = new LRUCache(1);
tiny.put(1, 1);                     // cache: [1]
tiny.put(2, 2);             // evicts key 1 → cache: [2]
console.log(tiny.get(1));   // -1   // evicted
console.log(tiny.get(2));   // 2
