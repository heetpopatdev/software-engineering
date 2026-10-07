Time & Space Complexity

Understanding how an algorithm's time and memory usage grows as the input size increases.

📌 What is Complexity?

Complexity helps us understand how efficient an algorithm is.

There are two main types:

Time Complexity → How the amount of work grows with input size.

Space Complexity → How much memory the algorithm uses.

We usually represent complexity using Big O notation.

⏱️ Time Complexity

Time complexity tells us how the amount of work performed by an algorithm changes as the input size N increases.

We are not measuring the exact seconds taken by a program because hardware and environment can change the actual execution time.

Instead, we study how the work grows with N.

🔹 Common Time Complexities

Complexity

Name

Basic Idea

O(1)

Constant

Work does not depend on N

O(log N)

Logarithmic

Input is repeatedly reduced

O(N)

Linear

Work grows directly with N

O(N²)

Quadratic

Work grows roughly as N × N

1. O(1) — Constant Time

The amount of work stays approximately the same regardless of the input size.

Example

int sum = a + b;

Only one operation is performed.

Time Complexity: O(1)

2. O(N) — Linear Time

The amount of work grows directly with the input size N.

Example

for(int i = 0; i < N; i++) {
cout << i;
}

If N = 10 → about 10 operations.

If N = 100 → about 100 operations.

Time Complexity: O(N)

3. O(N²) — Quadratic Time

Usually happens when we have nested loops.

Example

for(int i = 0; i < N; i++) {
for(int j = 0; j < N; j++) {
cout << i << j;
}
}

Outer loop runs N times.

Inner loop runs N times for each outer loop.

So:

N × N = N²

Time Complexity: O(N²)

4. O(log N) — Logarithmic Time

Usually happens when the input is repeatedly divided.

Example

while(N > 1) {
N = N / 2;
}

The input becomes half each time.

For example:

16 → 8 → 4 → 2 → 1

Time Complexity: O(log N)

📌 Constants in Big O

Constants are ignored in Big O notation.

Example

for(int i = 0; i < 5; i++) {
cout << i;
}

This is technically O(5).

But 5 is a constant, so we write:

Time Complexity: O(1)

📌 Separate Loops

When loops are one after another, we add their complexity.

Example

for(int i = 0; i < N; i++) {
cout << i;
}

for(int i = 0; i < N; i++) {
cout << i;
}

Complexity:

O(N) + O(N) = O(2N)

Ignore the constant 2.

Time Complexity: O(N)

📌 Nested Loops

When loops are inside each other, we usually multiply their complexity.

Example

for(int i = 0; i < N; i++) {

    for(int j = 0; j < N; j++) {

    }

}

N × N = N²

Time Complexity: O(N²)

📌 Best Case and Worst Case

Consider searching for a value:

for(int i = 0; i < N; i++) {
if(arr[i] == target) {
break;
}
}

Best Case

The target is the first element.

Only one check is needed.

Best Case: O(1)

Worst Case

The target is the last element or is not present.

We may check all N elements.

Worst Case: O(N)

📊 Big O, Theta and Omega

There are three common notations:

Big O O → Upper bound

Theta Θ → Tight bound

Omega Ω → Lower bound

Important: Theta does not mean average case.

💾 Space Complexity

Space complexity tells us how much memory an algorithm uses as the input size increases.

1. O(1) Space

If the algorithm uses only a fixed amount of extra memory:

int a = 10;
int b = 20;
int sum = a + b;

The number of variables does not depend on N.

Space Complexity: O(1)

2. O(N) Space

If extra memory grows with N:

int arr[N];

If N increases, the required memory also increases.

Space Complexity: O(N)

📌 Time vs Space

Time complexity and space complexity are independent.

An algorithm can have:

Time → O(N²)
Space → O(1)

So, a program can take more time but use very little extra memory.

📌 Auxiliary Space

Auxiliary space means the extra memory used by an algorithm, excluding the input itself.

For example:

int sum = 0;

Only a fixed amount of extra memory is used.

Auxiliary Space: O(1)

🧠 Quick Cheat Sheet

Situation

Complexity

Fixed operation

O(1)

One loop

O(N)

Nested loops

O(N²)

Repeatedly divide by 2

O(log N)

Two separate O(N) loops

O(N)

Extra array of size N

O(N)

Fixed variables

O(1)

🎯 Simple Rules to Remember

One operation → O(1)

One loop → O(N)

Nested loops → O(N²)

Divide by 2 → O(log N)

Separate loops → Add them

Constants → Ignore them

Extra N-size array → O(N) Space

🚀 How to Find Complexity

When you see code, ask:

Is there a single operation?
→ O(1)

Is there one loop running N times?
→ O(N)

Are loops nested?
→ Usually O(N²)

Is the input repeatedly divided?
→ O(log N)

Are there separate loops?
→ Add their complexities and ignore constants.

Is extra memory increasing with N?
→ Space is usually O(N).

📌 Final Mental Model

O(1) → Same amount of work

O(log N) → Slowly increases

O(N) → Increases with N

O(N²) → Increases much faster

The main goal of complexity analysis is to understand how an algorithm grows as N becomes larger.
