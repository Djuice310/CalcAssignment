

(function () {
  const results = [];
  const root = document.getElementById("app-root");

  // Start Results table
  document.write('<table>');
  document.write('<thead><tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr></thead>');
  document.write('<tbody>');

  while (true) {
    const x = prompt("Enter the first number :");
    if (x === null) break;

    const y = prompt("Enter the second number:");
    if (y === null) break;

    const operator = prompt("Choose an operator (+, -, *, /, %):");
    if (operator === null) break;

    const num1 = parseFloat(x);
    const num2 = parseFloat(y);
    let result;

    // Validate
    if (isNaN(num1) || isNaN(num2)) {
      result = '<span class="err">Error: Invalid number(s)</span>';
    } else {
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = (num2 !== 0) ? (num1 / num2) : '<span class="err">Error: Division by zero</span>';
          break;
        case '%':
          result = (num2 !== 0) ? (num1 % num2) : '<span class="err">Error: Mod by zero</span>';
          break;
        default:
          result = '<span class="err">Error: Invalid operator</span>';
      }
    }

    // Prepare cell display text
    const display =
      (typeof result === 'number' && !isNaN(result))
        ? `<span class="ok">${Number.isInteger(result) ? result : result.toFixed(4)}</span>`
        : result; // already HTML for errors

    // Write row
    document.write(
      `<tr><td>${x}</td><td>${operator ?? ''}</td><td>${y}</td><td>${display}</td></tr>`
    );

    // Keep only valid numeric results
    if (typeof result === 'number' && !isNaN(result)) {
      results.push(result);
    }
  }

  document.write('</tbody>');
  document.write('</table>');

  // Summary
  if (results.length > 0) {
    const min = Math.min(...results);
    const max = Math.max(...results);
    const total = results.reduce((a, b) => a + b, 0);
    const avg = total / results.length;

    document.write('<h2>Bat-Summary</h2>');
    document.write('<table>');
    document.write('<thead><tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr></thead>');
    document.write('<tbody>');
    document.write(
      `<tr>
        <td>${Number.isInteger(min) ? min : min.toFixed(4)}</td>
        <td>${Number.isInteger(max) ? max : max.toFixed(4)}</td>
        <td>${Number.isInteger(avg) ? avg : avg.toFixed(4)}</td>
        <td>${Number.isInteger(total) ? total : total.toFixed(4)}</td>
      </tr>`
    );
    document.write('</tbody></table>');
  } else {
    document.write('<h2>Summary</h2>');
    document.write('<div class="hint">No valid results to summarize. The night is quiet in Gotham.</div>');
  }
})();
