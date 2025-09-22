class HashSet {
  constructor(size = 16) {
    // Initialize buckets: an array of empty arrays for chaining collisions
    this.buckets = new Array(size).fill(null).map(() => []);
    this.size = size;  // Number of buckets
  }

  // Hash function: converts value to an index in [0, size-1]
  _hash(value) {
    let hash = 0;
    const str = value.toString();  // Convert value to string for hashing

    for (let i = 0; i < str.length; i++) {
      // Polynomial rolling hash: multiply current hash by 31 and add char code
      hash = (hash * 31 + str.charCodeAt(i)) % this.size;
    }

    return hash;  // Return bucket index
  }

  // Add a value to the set if not already present
  add(value) {
    const index = this._hash(value);   // Get bucket index
    const bucket = this.buckets[index]; // Retrieve bucket (array)

    // Check if value already exists in bucket (avoid duplicates)
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === value) {
        return;  // Value found, do not add duplicate
      }
    }

    bucket.push(value);  // Value not found, add to bucket
  }

  // Check if value exists in the set
  has(value) {
    const index = this._hash(value);  // Get bucket index
    const bucket = this.buckets[index];  // Retrieve bucket

    // Search bucket for value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === value) {
        return true;  // Found value
      }
    }

    return false;  // Not found
  }

  // Remove a value from the set, if it exists
  remove(value) {
    const index = this._hash(value);  // Get bucket index
    const bucket = this.buckets[index];  // Retrieve bucket

    // Search bucket for value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] === value) {
        bucket.splice(i, 1);  // Remove value from bucket
        return true;  // Removal successful
      }
    }

    return false;  // Value not found, nothing removed
  }
}

// Example usage:
const set = new HashSet();

set.add(5);
set.add("hello");
set.add(42);
set.add("world");
set.add(5);  // Duplicate, ignored

console.log(set.has(5));       // true
console.log(set.has("hello")); // true
console.log(set.has("foo"));   // false

set.remove(5);
console.log(set.has(5));       // false



# What happens internally when you call add(5)?

add(value) {
  const index = this._hash(value);   // Step 1: Compute bucket index for value (5)
  const bucket = this.buckets[index]; // Step 2: Get the bucket at that index

  // Step 3: Check if 5 already exists in this bucket to avoid duplicates
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === value) {
      return;  // If found, do nothing and exit
    }
  }

  bucket.push(value);  // Step 4: If not found, add 5 to the bucket array
}


Detailed explanation for add(5):

Hashing value 5:

The method _hash(5) converts 5 to string "5".

Iterates over the character '5' and calculates the hash:

hash = (0 * 31 + '5'.charCodeAt(0)) % this.size
     = (0 + 53) % 16
     = 53 % 16
     = 5


So, the bucket index is 5.

Retrieve bucket at index 5:

Access this.buckets[5], which is an array initialized to empty: []

Check if 5 already exists in the bucket:

Since bucket is empty [], the loop checking for duplicates does not find 5.

Add 5 to the bucket:

bucket.push(5) adds the number 5 into the array at bucket 5.

Now this.buckets[5] = [5].



# HashSet add(value) Method and Collision Handling — Notes

Buckets: The HashSet stores elements in an array of buckets. Each bucket is an array used to hold multiple values that hash to the same index (collision resolution by chaining).
When add(value) is called:
Compute bucket index:
The _hash(value) function converts the value to a bucket index between 0 and size - 1.

Retrieve the bucket:
Access the array at this.buckets[index].
This bucket may be empty or already contain values.

Check for duplicates:
Iterate over the bucket array.
If the value already exists in the bucket, do not add it again (to prevent duplicates).

Exit the method early.
Add the value if not present:
If the value is not found, append it to the bucket array.

Collision example:
Suppose 21 and 5 both hash to index 5.
First, add(21) adds 21 to bucket 5 → bucket 5 becomes [21].
Then add(5):
Finds bucket 5 contains [21].
Checks for 5 inside [21] → not found.
Adds 5, so bucket 5 becomes [21, 5].

Duplicate add example:
Calling add(5) again:
Bucket 5 is [21, 5].
Checks if 5 exists → found.
Does not add duplicate; bucket remains [21, 5].

Why this matters:
Hash collisions are inevitable.
Buckets store multiple values to handle collisions.
Checking for duplicates maintains set uniqueness.
This chaining approach keeps HashSet functional and efficient.