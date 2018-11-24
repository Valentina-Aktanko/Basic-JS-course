'use strict';

let a = 1, b = 1, c, d;

c = ++a;
alert(c);   // 2. В переменную c присвоится значение переменной a после ее увелинения на 1.

d = b++;
alert(d);   // 1. В переменную d присвоится значение, которое имела b до ее увеличения.

c = 2 + ++a;
alert(c);   // 5. Тут переменная a уже имела значение 2, и еще увеличилась на 1. Теперь а = 3, с = 2 + 3, т.е. 5.
            // Приоритет у ++a.

d = 2 + b++;
alert(d);   // 4. Берется значение B до его увеличения, т.е. на данный момент b = 2. d = 2 + 2, т.е. 4.
            // Приоритет у b++.

alert(a);   // 3. Изначально a = 1. В 5 строке a = 2, а в 11 строке - a = 3.
alert(b);   // 3. Изначально b = 1, в 8 строке b = 2, а в 14 строке - b = 3.

// Постфиксная форма i++ отличается от префиксной ++i тем, что возвращает старое значение, бывшее до увеличения.
// Инкремент/декремент имеет более высокий приоритет и выполняется раньше, чем арифметические операции.
