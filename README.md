# Faulty Calculator  

A simple JavaScript calculator with a twist — it doesn’t always give the correct answer!  

## 🔹 Features  
- Performs basic arithmetic operations: **addition, subtraction, multiplication, division**.  
- Simulates a **faulty calculator** in two ways:  
  1. **Faulty Logic (10% chance):**  
     - Randomly replaces the intended operation with another one.  
     - Example: `2 + 3` → becomes `2 - 3`.  
  2. **Faulty Result (Random Offset):**  
     - Sometimes adds or subtracts a small random value (between `-5` and `+4`) to the final answer.  

## 🔹 Example  
- Input: `2 + 3`  
- Correct Answer: `5`  
- Faulty Answer (offset method): `8`  
- Faulty Answer (logic swap): `-1`  

👉 You never know what answer you’ll get! 🎲  

## 🔹 Purpose  
This project was created for **fun and learning**. It demonstrates:  
- Handling button input in **JavaScript**.  
- **DOM manipulation** for updating the calculator screen.  
- Using **randomness** to simulate faulty logic.  

## 🔹 How to Run  
1. Clone this repository:  
   ```bash
   git clone https://github.com/makertoy32/Faulty_Calculator.git
