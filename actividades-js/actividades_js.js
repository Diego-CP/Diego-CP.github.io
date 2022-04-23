// Actividades de Javascript
// Diego Corrales Pinedo, A01781631

// Función para encontrar el primer caracter repetido de un string
function first(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.substr(i + 1).includes(str[i])) {
            console.log('Primer caracter repetido: ', str[i]);
            break;
        } 
    }
}

console.log(first("acddbe"))

// Función para aplicar bubble-sort a un arreglo dado
function bubbleSort(arr) {
    let temp = 0;
    let order = true;
    while (order == true) {
        order = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                order = true;
            }
        }
    }
    return arr;
}

// Función para imprimir un arreglo
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


let a = bubbleSort([1, 2, 5, 3, 7, 4, 9, 8]);
console.log("Arreglo ordenado con Bubble Sort");
console.log(printArray(a));

// Función para intercambiar dos elementos de posicion para el quick sort
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Función para partir el arreglo por la mitad. Toma el utlimo 
//  elemento como pivote, checa que todos los elementos a su
//  izquierda sean menores y a su derecha mayores. Los elementos
//  a cada lado se hacen sus propios arreglos hasta reducirlo a 1.
function partition(arr, low, high) {
 
    // Definir pivote como ultimo elemento
    let pivot = arr[high];
 
    // Índice del pivote se define inicialmente
    //  como el del principio
    let idx = (low - 1);
 
    // Pasar por todos los elementos del arreglo
    //  para encontrar la posición correcta del 
    //  pivote
    for (let i = low; i <= high - 1; i++) {
        // Si el elemento actual es menor que el
        //  pivote
        if (arr[i] < pivot) {
            // Incrementar el índice del pivote
            //  para ir al siguiente elemento
            idx++;
            // Intercambiar las posiciones del
            //  índice y el elemento actual
            swap(arr, idx, i);
        }
    }
    // Intercambiar las posiciones del índice del
    //  pivote y el último elemento (pivote original)
    //  para que quede en medio.
    swap(arr, idx + 1, high);
    // Regresar el índice del pivote
    return (idx + 1);
}

// Función recursiva para aplicar quick-sort
function quickSort (arr, low, high) {
    // Si el arreglo tiene más de un elemento
    if (low < high) {
        // Conseguir el índice del pivote
        let idx = partition(arr, low, high);
 
        // Aplicar la misma logica a los arreglos 
        //  de izquierda y derecha, usando el índice
        //  para partir por la mitad
        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
    return arr;
}
// Código para Quicksort basado en: https://www.geeksforgeeks.org/quick-sort/
// Código para Quicksort basado en: https://stackabuse.com/quicksort-in-javascript/

let b = [1, 6, 8, 3, 5, 4, 2, 0];
let n = b.length - 1;
console.log("Arreglo ordenado con Quick Sort")
console.log(printArray(quickSort(b, 0, n)));

// Función para invertir un arreglo y regresarlo como otro
function inverseNew(arr) {
    let newArr = [];
    for (let i = arr.length; i >= 0; i--) {
        // push() es el equivalente a append()
        newArr.push(arr[i]);
    }
    return newArr;
}

let c = [1, 2, 3, 4, 5];
console.log("Arreglo invertido, regresado como uno nuevo");
console.log(printArray(inverseNew(c)));


// Función para ivnertir un arreglo y regresarlo como el mismo
function inverseKeep(arr) {
    for (let i = arr.length; i >= 0; i--) {
        arr.push(arr[i]);
        // pop() quita el último elemento de un arreglo
        arr.pop();
    }
    return arr;
}

let d = [1, 2, 3, 4, 5];
console.log("Arreglo invertido, regresado como el mismo arreglo de entrada");
console.log(printArray(inverseNew(d)));

// Clase para un vector de tres dimensiones
class Vector {
    // Constructor
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // Método para restar vectores
    subtractVectors(v2) {
        let result = new Vector((this.x - v2.x), (this.y - v2.y), (this.z - v2.z));
        return result;
    }

    // Método para sumar vectores
    sumVectors(v2) {
        let result = new Vector((this.x + v2.x), (this.y + v2.y), (this.z + v2.z));
        return result;
    }

    // Método para conseguir la magnitud
    magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    // Método para conseguir el vector unitario
    unit() {
        let magnitude = this.magnitude();
        let result = new Vector((this.x / magnitude), (this.y / magnitude), (this.z / magnitude));
        return result;
    }

    // Método para multiplicar un vector por un valor escalar
    scalarMultiply(s) {
        this.x = this.x * s;
        this.y = this.y * s;
        this.z = this.z * s;
    }

    // Método para imprimir un vector
    printVector() {
        console.log("(" + this.x + ", " + this.y + ", " + this.z + ")");
    }
}

let vector1 = new Vector(2.5, 3.5, 4);
let vector2 = new Vector(1.1, 9, 5.4);

console.log("Vector 1:");
vector1.printVector();
console.log("Vector 2:");
vector2.printVector();
console.log("Magnitud vector 1:");
console.log(vector1.magnitude());
console.log("Vector unitario de vector 2:");
console.log(vector2.unit());
console.log("Suma de vectores 1 y 2:");
console.log(vector1.sumVectors(vector2));
console.log("Resta de vectores 1 y 2:");
console.log(vector1.subtractVectors(vector2));
vector1.scalarMultiply(5);
console.log("Vector 1 multiplicado por 5:")
vector1.printVector();

// Función para conseguir el máximo divisor común
function maxCommonDivisor(n1, n2) {
    if (n2 != 0) {
        // Se divide hasta que la division de ambos numeros 
        //  sea exacta
        return maxCommonDivisor(n2, n1 % n2);
    } else {
        return n1;
    }
}
// Código para el Mayor Divisor Comun basado en: https://www.programiz.com/c-programming/examples/hcf-recursion

console.log("Máximo divisor común de 36 y 6:" + maxCommonDivisor(36, 7));

// Función para conseguir el producto punto de dos vectores
function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; 
}

// Función para determinar si dos vectores son ortogonales
function orthogonal(v1, v2) {
    if (dot(v1, v2) == 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Son ortogonales vector 1 y 2? " + orthogonal(vector1, vector2));

let vector3 = new Vector(1, 0, 0);
let vector4 = new Vector(0, 1, 0)

console.log("Vector 3:");
vector3.printVector();
console.log("Vector 4:");
vector4.printVector();

console.log("Son ortogonales vector 3 y 4? " + orthogonal(vector3, vector4));

// Función para convertir un string a "Hacker Speak" usando un Switch
function hackerSpeakSwitch(text) {
    let hackerText = '';
    for (let i = 0; i <= text.length; i++) {
        switch (text[i]) {
            case 'a':
                hackerText += '4';
                break;
            case 'e':
                hackerText += '3';
                break;
            case 'i':
                hackerText += '1';
                break;
            case 'o':
                hackerText += '0';
                break;
            case 's':
                hackerText += '5';
                break;
            case 'g':
                hackerText += '6';
                break;
            default:
                hackerText += text[i];
                break;
        }
    }
    return hackerText;
}

// Objeto usado como diccionario para la función hackerSpeakDict
let hackerDict = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5',
    'g': '6'
};

// Función para convertir un string a "Hacker Speak" usando un diccionario
function hackerSpeakDict(text) {
    let hackerText = '';
    for (let i = 0; i <= text.length; i++) {
        if (text[i] in hackerDict) {
            hackerText += hackerDict[text[i]];
        } else {
            hackerText += text[i];
        }
    }
    return hackerText;
}

console.log("'Hello world' en hacker speak: " + hackerSpeakSwitch("Hello world"));
console.log("'Javascript es divertido' en hacker speak: " + hackerSpeakDict("Javascript es divertido"));
console.log("'' en hacker speak (diccionario): " + hackerSpeakDict(""));
console.log("'' en hacker speak (switch): " + hackerSpeakSwitch(""));

// Función para encontrar todos los factores de un número dado
function factorize(n) {
    let fact = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            fact.push(i);
        }
    }
    return fact;
}

console.log("Factores de 12: " + printArray(factorize(12)));
console.log("Factores de 100: " + printArray(factorize(100)));
console.log("Factores de 0: " + printArray(factorize(0)));

// Función para quitar elementos duplicados de un arreglo
function removeDuplicates(arr) {
    let seen = {};
    // filter() crea un arreglo con los elementos que cumplan con la condicion dada
    return arr.filter(function(elem) {
        // hasOwnProperty() verifica si el objeto (usado como diccionario) contiene elem
        // Si lo contiene, regresa false (no se agrega), de otra manera se regresa true
        //  (si se agrega) y se añade al diccionario de elementos entcontrados hasta ahora
        return seen.hasOwnProperty(elem) ? false : (seen[elem] = true);
    });
}
// Codigo para quitar duplicados basado en: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

let arrDuplicate = [1, 2, 1, 2, 3, 4, 3, 5, 5, 5];
console.log("Arreglo con duplicados:"); 
printArray(arrDuplicate);
console.log("Arreglo sin duplicados:");
printArray(removeDuplicates(arrDuplicate));