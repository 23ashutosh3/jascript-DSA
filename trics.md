# Tricks & Patterns

## Sliding Window

### Kaise kaam karta hai

Ek array diya hai, hume sabse chhota subarray dhundhna hai jiska sum target ke barabar ya usse bada ho — hume **sum match** karna hai, **length nahi**.

### Solve karne ka tarika

1. **Right pointer** se window ko badhao — `nums[right]` ko sum me jodo
2. Jab `sum >= target` ho jaye, tab window ka length nikalo (`right - left + 1`)
3. Phir **left pointer** se window ko chhota karo — `nums[left]` ko sum se ghatao, left aage badhao
4. Jab tak `sum >= target` hai, left se shrink karte raho (kyunki hume sabse chhota window chahiye)
5. Left kabhi right se aage nahi jayega
6. Dono pointers sirf aage badhte hain, isliye **O(n)** hai

### Interview me sliding window kaise pehchanein

- Array ya string di ho aur sabse chhota ya sabse lamba subarray/substring dhundhna ho jo koi condition satisfy kare
- Condition me koi running total ho — jaise sum, character count, etc.
- Sabse badi pehchaan: problem me **lagaataar (contiguous)** elements maange, random elements nahi

if duplicates come use hash set in sliding widow

when specific size of arr of given which can considered as window then you can use arr to push and pop for sliding window
