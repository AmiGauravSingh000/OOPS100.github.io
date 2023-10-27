const questions = [
    {
        question: "What is the primary goal of object-oriented programming (OOP)?",
        answers: [
            { text: "Code optimization", correct: false },
            { text: "Code reusability", correct: true },
            { text: "Code compilation", correct: false },
            { text: "Code security", correct: false },
        ],
    },
    // 6. In C++, what keyword is used to create a class?
    // a. class
    // b. struct
    // c. object
    // d. new
    // Answer: a
    {
        question: "In C++, what keyword is used to create a class?",
        answers: [
            { text: "class", correct: true },
            { text: "struct", correct: false },
            { text: "object", correct: false },
            { text: "new", correct: false },
        ],
    },
    // 7. What is encapsulation in OOP?
    // a. The process of inheritance
    // b. Hiding the implementation details of an object
    // c. Creating a new object
    // d. The process of polymorphism
    // Answer: b
    {
        question: "What is encapsulation in OOP?",
        answers: [
            { text: "The process of inheritance", correct: false },
            { text: "Hiding the implementation details of an object", correct: true },
            { text: "Creating a new object", correct: false },
            { text: "The process of polymorphism", correct: false },
        ],
    },
    // 8. Which access specifier allows class members to be accessed from any part of the program?
    // a. public
    // b. private
    // c. protected
    // d. friend
    // Answer: a
    {
        question: "Which access specifier allows class members to be accessed from any part of the program?",
        answers: [
            { text: "public", correct: true },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "friend", correct: false },
        ],
    },
    // 9. In C++, what is the purpose of this pointer?
    // a. It points to the base class
    // b. It points to the derived class
    // c. It points to the current object
    // d. It points to the global object
    // Answer: c
    {
        question: "In C++, what is the purpose of this pointer?",
        answers: [
            { text: "It points to the base class", correct: false },
            { text: "It points to the derived class", correct: false },
            { text: "It points to the current object", correct: true },
            { text: "It points to the global object", correct: false },
        ],
    },
    // 10. Which C++ feature allows a class to inherit the properties and behaviors of another class?
    // a. Composition
    // b. Inheritance
    // c. Polymorphism
    // d. Encapsulation
    // Answer: b
    {
        question: "Which C++ feature allows a class to inherit the properties and behaviors of another class?",
        answers: [
            { text: "Composition", correct: false },
            { text: "Inheritance", correct: true },
            { text: "Polymorphism", correct: false },
            { text: "Encapsulation", correct: false },
        ],
    },
    // 11. What is the C++ keyword used to create an object of a class?
    // a. class
    // b. object
    // c. instance
    // d. new
    // Answer: d
    {
        question: "What is the C++ keyword used to create an object of a class?",
        answers: [
            { text: "class", correct: false },
            { text: "object", correct: false },
            { text: "instance", correct: false },
            { text: "new", correct: true },
        ],
    },
    // 12. In C++, what is the difference between a class and a struct?
    // a. Classes support inheritance, structs do not.
    // b. Classes can have both public and private members, structs cannot have private members.
    // c. There is no difference; the terms are interchangeable.
    // d. Structs support polymorphism, classes do not.
    // Answer: a
    {
        question: "In C++, what is the difference between a class and a struct?",
        answers: [
            { text: "Classes support inheritance, structs do not.", correct: true },
            { text: "Classes can have both public and private members, structs cannot have private members.", correct: false },
            { text: "There is no difference; the terms are interchangeable.", correct: false },
            { text: "Structs support polymorphism, classes do not.", correct: false },
        ],
    },
    // 13. Which operator is used to access a member of an object in C++?
    // a. .
    // b. ->
    // c. ::
    // d. ::
    // Answer: a
    {
        question: "Which operator is used to access a member of an object in C++?",
        answers: [
            { text: ".", correct: true },
            { text: "->", correct: false },
            { text: "::", correct: false },
            { text: "::", correct: false },
        ],
    },
    // 14. What is a constructor in C++?
    // a. A function that destructs an object
    // b. A function that creates an object
    // c. A function that initializes an object
    // d. A function that copies an object
    // Answer: c
    {
        question: "What is a constructor in C++?",
        answers: [
            { text: "A function that destructs an object", correct: false },
            { text: "A function that creates an object", correct: false },
            { text: "A function that initializes an object", correct: true },
            { text: "A function that copies an object", correct: false },
        ],
    },
    // 15. What is function overloading in C++?
    // a. Creating multiple functions with the same name but different parameters
    // b. Calling a function from within another function
    // c. Using a function to override another function
    // d. Using a function to hide another function
    // Answer: a
    {
        question: "What is function overloading in C++?",
        answers: [
            { text: "Creating multiple functions with the same name but different parameters", correct: true },
            { text: "Calling a function from within another function", correct: false },
            { text: "Using a function to override another function", correct: false },
            { text: "Using a function to hide another function", correct: false },
        ],
    },
    // 16. What is the purpose of the virtual keyword in C++?
    // a. It specifies a constant value for a variable.
    // b. It allows a class to be instantiated.
    // c. It declares a virtual function, enabling dynamic binding.
    // d. It prevents memory allocation.
    // Answer: c
    {
        question: "What is the purpose of the virtual keyword in C++?",
        answers: [
            { text: "It specifies a constant value for a variable.", correct: false },
            { text: "It allows a class to be instantiated.", correct: false },
            { text: "It declares a virtual function, enabling dynamic binding.", correct: true },
            { text: "It prevents memory allocation.", correct: false },
        ],
    },
    // 17. What is function overriding in C++?
    // a. Creating multiple functions with the same name but different parameters
    // b. Using a function to hide another function
    // c. Using a function to override another function
    // d. Calling a function from within another function
    // Answer: c
    {
        question: "What is function overriding in C++?",
        answers: [
            { text: "Creating multiple functions with the same name but different parameters", correct: false },
            { text: "Using a function to hide another function", correct: false },
            { text: "Using a function to override another function", correct: true },
            { text: "Calling a function from within another function", correct: false },
        ],
    },
    // 18. What is a pure virtual function in C++?
    // a. A function that has a definition and can be overridden
    // b. A function that has no definition and must be overridden
    // c. A function that cannot be called
    // d. A function that is static
    // Answer: b
    {
        question: "What is a pure virtual function in C++?",
        answers: [
            { text: "A function that has a definition and can be overridden", correct: false },
            { text: "A function that has no definition and must be overridden", correct: true },
            { text: "A function that cannot be called", correct: false },
            { text: "A function that is static", correct: false },
        ],
    },
    // 19. What is the purpose of the 'new' operator in C++?
    // a. To create a new object
    // b. To allocate memory for an object on the heap
    // c. To call a function
    // d. To delete an object
    // Answer: b
    {
        question: "What is the purpose of the 'new' operator in C++?",
        answers: [
            { text: "To create a new object", correct: false },
            { text: "To allocate memory for an object on the heap", correct: true },
            { text: "To call a function", correct: false },
            { text: "To delete an object", correct: false },
        ],
    },
    // 20. What is the purpose of the 'delete' operator in C++?
    // a. To create a new object
    // b. To allocate memory for an object on the stack
    // c. To deallocate memory for an object on the heap
    // d. To call a function
    // Answer: c
    {
        question: "What is the purpose of the 'delete' operator in C++?",
        answers: [
            { text: "To create a new object", correct: false },
            { text: "To allocate memory for an object on the stack", correct: false },
            { text: "To deallocate memory for an object on the heap", correct: true },
            { text: "To call a function", correct: false },
        ],
    },
    // 21. What is a reference variable in C++?
// a. A variable that refers to another variable
// b. A variable that is constant
// c. A variable that is global
// d. A variable that is declared outside any function
// Answer: a
{
    question: "What is a reference variable in C++?",
    answers: [
        { text: "A variable that refers to another variable", correct: true },
        { text: "A variable that is constant", correct: false },
        { text: "A variable that is global", correct: false },
        { text: "A variable that is declared outside any function", correct: false },
    ],
},
// 22. What is a destructor in C++?
// a. A function that creates objects
// b. A function that initializes objects
// c. A function that deletes objects
// d. A function that destructs objects
// Answer: d
{
    question: "What is a destructor in C++?",
    answers: [
        { text: "A function that creates objects", correct: false },
        { text: "A function that initializes objects", correct: false },
        { text: "A function that deletes objects", correct: false },
        { text: "A function that destructs objects", correct: true },
    ],
},
// 23. What is a copy constructor in C++?
// a. A constructor that copies an existing object
// b. A constructor that creates a new object
// c. A constructor that deletes an object
// d. A constructor that initializes an object
// Answer: a
{
    question: "What is a copy constructor in C++?",
    answers: [
        { text: "A constructor that copies an existing object", correct: true },
        { text: "A constructor that creates a new object", correct: false },
        { text: "A constructor that deletes an object", correct: false },
        { text: "A constructor that initializes an object", correct: false },
    ],
},
// 24. What is a friend function in C++?
// a. A function that is friendly
// b. A function that can access private members of a class
// c. A function that is part of a class
// d. A function that is static
// Answer: b
{
    question: "What is a friend function in C++?",
    answers: [
        { text: "A function that is friendly", correct: false },
        { text: "A function that can access private members of a class", correct: true },
        { text: "A function that is part of a class", correct: false },
        { text: "A function that is static", correct: false },
    ],
},
// 25. What is a template class in C++?
// a. A class that can be used as a template for creating objects of other classes
// b. A class that cannot have member functions
// c. A class that is declared with 'template' keyword
// d. A class that is sealed and cannot be inherited
// Answer: a
{
    question: "What is a template class in C++?",
    answers: [
        { text: "A class that can be used as a template for creating objects of other classes", correct: true },
        { text: "A class that cannot have member functions", correct: false },
        { text: "A class that is declared with 'template' keyword", correct: false },
        { text: "A class that is sealed and cannot be inherited", correct: false },
    ],
},

// 26. What is operator overloading in C++ primarily used for?
// a. To create new operators
// b. To create new data types
// c. To create new objects
// d. To create new classes
// Answer: a
{
    question: "What is operator overloading in C++ primarily used for?",
    answers: [
        { text: "To create new operators", correct: true },
        { text: "To create new data types", correct: false },
        { text: "To create new objects", correct: false },
        { text: "To create new classes", correct: false },
    ],
},
// 27. In C++, what is a template function used for?
// a. To define a new class
// b. To create a class with default constructors
// c. To create a function that can work with different data types
// d. To create a static function
// Answer: c
{
    question: "In C++, what is a template function used for?",
    answers: [
        { text: "To define a new class", correct: false },
        { text: "To create a class with default constructors", correct: false },
        { text: "To create a function that can work with different data types", correct: true },
        { text: "To create a static function", correct: false },
    ],
},
// 28. What is the diamond problem in C++ related to?
// a. Multiple inheritance
// b. Polymorphism
// c. Operator overloading
// d. Class templates
// Answer: a
{
    question: "What is the diamond problem in C++ related to?",
    answers: [
        { text: "Multiple inheritance", correct: true },
        { text: "Polymorphism", correct: false },
        { text: "Operator overloading", correct: false },
        { text: "Class templates", correct: false },
    ],
},
// 29. What is the purpose of the dynamic_cast operator in C++?
// a. To perform dynamic memory allocation
// b. To cast a pointer or reference to a base class to a pointer or reference to a derived class
// c. To convert a pointer to a reference
// d. To declare dynamic arrays
// Answer: b
{
    question: "What is the purpose of the dynamic_cast operator in C++?",
    answers: [
        { text: "To perform dynamic memory allocation", correct: false },
        { text: "To cast a pointer or reference to a base class to a pointer or reference to a derived class", correct: true },
        { text: "To convert a pointer to a reference", correct: false },
        { text: "To declare dynamic arrays", correct: false },
    ],
},
// ... (Previous questions)

// 30. What is a copy constructor in C++ used for?
// a. To create a deep copy of an object
// b. To create a shallow copy of an object
// c. To create an exact replica of an object
// d. To compare two objects
// Answer: b
{
    question: "What is a copy constructor in C++ used for?",
    answers: [
        { text: "To create a deep copy of an object", correct: false },
        { text: "To create a shallow copy of an object", correct: true },
        { text: "To create an exact replica of an object", correct: false },
        { text: "To compare two objects", correct: false },
    ],
},
// 31. Which operator is used to access the members of a class through a pointer in C++?
// a. .
// b. ->
// c. ::
// d. ::
// Answer: b
{
    question: "Which operator is used to access the members of a class through a pointer in C++?",
    answers: [
        { text: ".", correct: false },
        { text: "->", correct: true },
        { text: "::", correct: false },
        { text: "::", correct: false },
    ],
},
// 32. What is the purpose of the protected access specifier in C++?
// a. To allow access only within the same class
// b. To allow access only within the same class and its derived classes
// c. To allow access from any part of the program
// d. To hide class members
// Answer: b
{
    question: "What is the purpose of the protected access specifier in C++?",
    answers: [
        { text: "To allow access only within the same class", correct: false },
        { text: "To allow access only within the same class and its derived classes", correct: true },
        { text: "To allow access from any part of the program", correct: false },
        { text: "To hide class members", correct: false },
    ],
},
// 33. In C++, what is a friend function?
// a. A function that is a member of a class
// b. A function that is declared as private
// c. A function that can access the private members of a class
// d. A function that is declared as virtual
// Answer: c
{
    question: "In C++, what is a friend function?",
    answers: [
        { text: "A function that is a member of a class", correct: false },
        { text: "A function that is declared as private", correct: false },
        { text: "A function that can access the private members of a class", correct: true },
        { text: "A function that is declared as virtual", correct: false },
    ],
},
// 34. What is operator overloading in C++?
// a. The process of creating new operators
// b. The process of defining new data types
// c. The process of reusing operators for different data types
// d. The process of overloading a program with too many operators
// Answer: c
{
    question: "What is operator overloading in C++?",
    answers: [
        { text: "The process of creating new operators", correct: false },
        { text: "The process of defining new data types", correct: false },
        { text: "The process of reusing operators for different data types", correct: true },
        { text: "The process of overloading a program with too many operators", correct: false },
    ],
},
// 35. What is inheritance in C++?
// a. The process of creating a new class
// b. The process of a class inheriting properties and behaviors from another class
// c. The process of declaring private members in a class
// d. The process of creating objects
// Answer: b
{
    question: "What is inheritance in C++?",
    answers: [
        { text: "The process of creating a new class", correct: false },
        { text: "The process of a class inheriting properties and behaviors from another class", correct: true },
        { text: "The process of declaring private members in a class", correct: false },
        { text: "The process of creating objects", correct: false },
    ],
},
// 36. In C++, what is a constructor with no arguments called?
// a. Parameterized constructor
// b. Default constructor
// c. Copy constructor
// d. Destructor
// Answer: b
{
    question: "In C++, what is a constructor with no arguments called?",
    answers: [
        { text: "Parameterized constructor", correct: false },
        { text: "Default constructor", correct: true },
        { text: "Copy constructor", correct: false },
        { text: "Destructor", correct: false },
    ],
},
// 37. What is function overriding in C++?
// a. Declaring a function with the same name in the same class
// b. Declaring a function in a derived class with the same name as a function in the base class
// c. Declaring a function with a different name in the same class
// d. Declaring a function with a different name in a derived class
// Answer: b
{
    question: "What is function overriding in C++?",
    answers: [
        { text: "Declaring a function with the same name in the same class", correct: false },
        { text: "Declaring a function in a derived class with the same name as a function in the base class", correct: true },
        { text: "Declaring a function with a different name in the same class", correct: false },
        { text: "Declaring a function with a different name in a derived class", correct: false },
    ],
},
// 38. What is the purpose of the static keyword in C++?
// a. To declare a variable as constant
// b. To specify that a variable is a global variable
// c. To declare a variable as a class member
// d. To specify that a variable is shared among all objects of a class
// Answer: d
{
    question: "What is the purpose of the static keyword in C++?",
    answers: [
        { text: "To declare a variable as constant", correct: false },
        { text: "To specify that a variable is a global variable", correct: false },
        { text: "To declare a variable as a class member", correct: false },
        { text: "To specify that a variable is shared among all objects of a class", correct: true },
    ],
},
// 39. What is dynamic memory allocation in C++?
// a. Allocating memory at compile time
// b. Allocating memory at runtime
// c. Allocating memory for global variables
// d. Allocating memory for constants
// Answer: b
{
    question: "What is dynamic memory allocation in C++?",
    answers: [
        { text: "Allocating memory at compile time", correct: false },
        { text: "Allocating memory at runtime", correct: true },
        { text: "Allocating memory for global variables", correct: false },
        { text: "Allocating memory for constants", correct: false },
    ],
},
// 40. What is the purpose of the this pointer in C++?
// a. To access the current object's address
// b. To access the base class object's address
// c. To access a static member's address
// d. To access a global variable's address
// Answer: a
{
    question: "What is the purpose of the this pointer in C++?",
    answers: [
        { text: "To access the current object's address", correct: true },
        { text: "To access the base class object's address", correct: false },
        { text: "To access a static member's address", correct: false },
        { text: "To access a global variable's address", correct: false },
    ],
},
// ... (Next questions)
// ... (Previous questions)

// 41. What is the purpose of the new operator in C++?
// a. To delete objects
// b. To allocate memory for an object on the heap
// c. To allocate memory for an object on the stack
// d. To create a copy of an object
// Answer: b
{
    question: "What is the purpose of the new operator in C++?",
    answers: [
        { text: "To delete objects", correct: false },
        { text: "To allocate memory for an object on the heap", correct: true },
        { text: "To allocate memory for an object on the stack", correct: false },
        { text: "To create a copy of an object", correct: false },
    ],
},
// 42. In C++, what is the purpose of the delete operator?
// a. To deallocate memory previously allocated using new
// b. To delete objects
// c. To deallocate memory previously allocated using malloc
// d. To remove a class from the program
// Answer: a
{
    question: "In C++, what is the purpose of the delete operator?",
    answers: [
        { text: "To deallocate memory previously allocated using new", correct: true },
        { text: "To delete objects", correct: false },
        { text: "To deallocate memory previously allocated using malloc", correct: false },
        { text: "To remove a class from the program", correct: false },
    ],
},
// 43. What is a destructor in C++ used for?
// a. To create objects
// b. To deallocate memory
// c. To create copies of objects
// d. To allocate memory
// Answer: b
{
    question: "What is a destructor in C++ used for?",
    answers: [
        { text: "To create objects", correct: false },
        { text: "To deallocate memory", correct: true },
        { text: "To create copies of objects", correct: false },
        { text: "To allocate memory", correct: false },
    ],
},
// 44. What is a pure virtual function in C++?
// a. A function with no implementation
// b. A function with a body and implementation
// c. A function that is always private
// d. A function that is declared as static
// Answer: a
{
    question: "What is a pure virtual function in C++?",
    answers: [
        { text: "A function with no implementation", correct: true },
        { text: "A function with a body and implementation", correct: false },
        { text: "A function that is always private", correct: false },
        { text: "A function that is declared as static", correct: false },
    ],
},
// 45. What is a virtual destructor in C++?
// a. A destructor declared as virtual
// b. A destructor that deletes all objects
// c. A destructor that creates objects
// d. A destructor with a body and implementation
// Answer: a
{
    question: "What is a virtual destructor in C++?",
    answers: [
        { text: "A destructor declared as virtual", correct: true },
        { text: "A destructor that deletes all objects", correct: false },
        { text: "A destructor that creates objects", correct: false },
        { text: "A destructor with a body and implementation", correct: false },
    ],
},
// 46. What is a template class in C++ used for?
// a. To create objects
// b. To create a blueprint for creating classes or functions
// c. To define private members in a class
// d. To create global variables
// Answer: b
{
    question: "What is a template class in C++ used for?",
    answers: [
        { text: "To create objects", correct: false },
        { text: "To create a blueprint for creating classes or functions", correct: true },
        { text: "To define private members in a class", correct: false },
        { text: "To create global variables", correct: false },
    ],
},
// 47. What is the purpose of the typeid operator in C++?
// a. To identify the type of an object
// b. To perform type conversion
// c. To create new data types
// d. To allocate memory
// Answer: a
{
    question: "What is the purpose of the typeid operator in C++?",
    answers: [
        { text: "To identify the type of an object", correct: true },
        { text: "To perform type conversion", correct: false },
        { text: "To create new data types", correct: false },
        { text: "To allocate memory", correct: false },
    ],
},
// 48. What is a friend class in C++?
// a. A class that inherits from another class
// b. A class that is declared as public
// c. A class that can access the private members of another class
// d. A class that is declared as abstract
// Answer: c
{
    question: "What is a friend class in C++?",
    answers: [
        { text: "A class that inherits from another class", correct: false },
        { text: "A class that is declared as public", correct: false },
        { text: "A class that can access the private members of another class", correct: true },
        { text: "A class that is declared as abstract", correct: false },
    ],
},
// 49. What is an exception handling in C++?
// a. A mechanism for handling runtime errors
// b. A mechanism for handling syntax errors
// c. A mechanism for handling compilation errors
// d. A mechanism for handling linker errors
// Answer: a
{
    question: "What is an exception handling in C++?",
    answers: [
        { text: "A mechanism for handling runtime errors", correct: true },
        { text: "A mechanism for handling syntax errors", correct: false },
        { text: "A mechanism for handling compilation errors", correct: false },
        { text: "A mechanism for handling linker errors", correct: false },
    ],
},
// 50. What is the purpose of the try-catch block in C++?
// a. To execute code only when an exception occurs
// b. To handle exceptions and prevent program termination
// c. To terminate the program
// d. To prevent exceptions from occurring
// Answer: b
{
    question: "What is the purpose of the try-catch block in C++?",
    answers: [
        { text: "To execute code only when an exception occurs", correct: false },
        { text: "To handle exceptions and prevent program termination", correct: true },
        { text: "To terminate the program", correct: false },
        { text: "To prevent exceptions from occurring", correct: false },
    ],
},

// ... (Next questions)
// 51. What is a lambda function in C++?
// a. A function declared inside a class
// b. A function that takes no arguments
// c. An anonymous function
// d. A global function
// Answer: c
{
    question: "What is a lambda function in C++?",
    answers: [
        { text: "A function declared inside a class", correct: false },
        { text: "A function that takes no arguments", correct: false },
        { text: "An anonymous function", correct: true },
        { text: "A global function", correct: false },
    ],
},
// 52. What is function overloading in C++?
// a. Defining multiple functions with the same name but different parameters
// b. Overloading the CPU with function calls
// c. Declaring functions inside classes
// d. Creating new functions
// Answer: a
{
    question: "What is function overloading in C++?",
    answers: [
        { text: "Defining multiple functions with the same name but different parameters", correct: true },
        { text: "Overloading the CPU with function calls", correct: false },
        { text: "Declaring functions inside classes", correct: false },
        { text: "Creating new functions", correct: false },
    ],
},
// 53. What is a copy constructor in C++ used for?
// a. To copy a class to another class
// b. To create a new class
// c. To create an exact copy of an object
// d. To create a derived class
// Answer: c
{
    question: "What is a copy constructor in C++ used for?",
    answers: [
        { text: "To copy a class to another class", correct: false },
        { text: "To create a new class", correct: false },
        { text: "To create an exact copy of an object", correct: true },
        { text: "To create a derived class", correct: false },
    ],
},
// 54. What is operator overloading in C++?
// a. Overloading the program with operators
// b. Defining new operators
// c. Overloading functions
// d. Defining how operators work with user-defined types
// Answer: d
{
    question: "What is operator overloading in C++?",
    answers: [
        { text: "Overloading the program with operators", correct: false },
        { text: "Defining new operators", correct: false },
        { text: "Overloading functions", correct: false },
        { text: "Defining how operators work with user-defined types", correct: true },
    ],
},
// 55. What is the 'this' pointer in C++?
// a. A pointer to the previous object
// b. A pointer to the current object
// c. A pointer to the next object
// d. A pointer to the parent object
// Answer: b
{
    question: "What is the 'this' pointer in C++?",
    answers: [
        { text: "A pointer to the previous object", correct: false },
        { text: "A pointer to the current object", correct: true },
        { text: "A pointer to the next object", correct: false },
        { text: "A pointer to the parent object", correct: false },
    ],
},
// 56. What is a namespace in C++?
// a. A region of memory
// b. A collection of functions
// c. A way to avoid naming conflicts
// d. A data type
// Answer: c
{
    question: "What is a namespace in C++?",
    answers: [
        { text: "A region of memory", correct: false },
        { text: "A collection of functions", correct: false },
        { text: "A way to avoid naming conflicts", correct: true },
        { text: "A data type", correct: false },
    ],
},
// 57. What is an abstract class in C++?
// a. A class with no objects
// b. A class that cannot be inherited
// c. A class that can only be used as a base class
// d. A class with no member functions
// Answer: c
{
    question: "What is an abstract class in C++?",
    answers: [
        { text: "A class with no objects", correct: false },
        { text: "A class that cannot be inherited", correct: false },
        { text: "A class that can only be used as a base class", correct: true },
        { text: "A class with no member functions", correct: false },
    ],
},
// 58. What is multiple inheritance in C++?
// a. Inheriting from multiple classes at the same time
// b. Inheriting from the same class multiple times
// c. Inheriting from a single class
// d. Inheriting from one class only
// Answer: a
{
    question: "What is multiple inheritance in C++?",
    answers: [
        { text: "Inheriting from multiple classes at the same time", correct: true },
        { text: "Inheriting from the same class multiple times", correct: false },
        { text: "Inheriting from a single class", correct: false },
        { text: "Inheriting from one class only", correct: false },
    ],
},
// 59. What is the 'const' keyword in C++ used for?
// a. To create constant variables
// b. To create global variables
// c. To create local variables
// d. To create static variables
// Answer: a
{
    question: "What is the 'const' keyword in C++ used for?",
    answers: [
        { text: "To create constant variables", correct: true },
        { text: "To create global variables", correct: false },
        { text: "To create local variables", correct: false },
        { text: "To create static variables", correct: false },
    ],
},
// 60. What is a smart pointer in C++?
// a. A pointer that can be used for arithmetic operations
// b. A pointer that needs to be explicitly deleted
// c. A pointer that automatically manages the memory of a dynamically allocated object
// d. A pointer that cannot be used in classes
// Answer: c
{
    question: "What is a smart pointer in C++?",
    answers: [
        { text: "A pointer that can be used for arithmetic operations", correct: false },
        { text: "A pointer that needs to be explicitly deleted", correct: false },
        { text: "A pointer that automatically manages the memory of a dynamically allocated object", correct: true },
        { text: "A pointer that cannot be used in classes", correct: false },
    ],
},

// ... (Next questions)
// 61. What is a pure virtual function in C++?
// a. A function that is pure
// b. A function without an implementation in a base class
// c. A function that can't be called
// d. A function that only returns 0
// Answer: b
{
    question: "What is a pure virtual function in C++?",
    answers: [
        { text: "A function that is pure", correct: false },
        { text: "A function without an implementation in a base class", correct: true },
        { text: "A function that can't be called", correct: false },
        { text: "A function that only returns 0", correct: false },
    ],
},
// 62. What is an inline function in C++?
// a. A function declared in a class
// b. A function that always executes in a single line
// c. A function that is inserted by the compiler in place of its call
// d. A function that can't be called
// Answer: c
{
    question: "What is an inline function in C++?",
    answers: [
        { text: "A function declared in a class", correct: false },
        { text: "A function that always executes in a single line", correct: false },
        { text: "A function that is inserted by the compiler in place of its call", correct: true },
        { text: "A function that can't be called", correct: false },
    ],
},
// 63. What is the purpose of the 'new' operator in C++?
// a. To create a new function
// b. To allocate memory for an object
// c. To delete an object
// d. To create an array of objects
// Answer: b
{
    question: "What is the purpose of the 'new' operator in C++?",
    answers: [
        { text: "To create a new function", correct: false },
        { text: "To allocate memory for an object", correct: true },
        { text: "To delete an object", correct: false },
        { text: "To create an array of objects", correct: false },
    ],
},
// 64. What is a reference variable in C++?
// a. A variable that refers to another variable
// b. A variable that stores text
// c. A variable that holds multiple values
// d. A variable that is constant
// Answer: a
{
    question: "What is a reference variable in C++?",
    answers: [
        { text: "A variable that refers to another variable", correct: true },
        { text: "A variable that stores text", correct: false },
        { text: "A variable that holds multiple values", correct: false },
        { text: "A variable that is constant", correct: false },
    ],
},
// 65. What is the 'auto' keyword in C++ used for?
// a. To declare a variable with an automatic storage duration
// b. To create automatic functions
// c. To automatically delete objects
// d. To declare constants
// Answer: a
{
    question: "What is the 'auto' keyword in C++ used for?",
    answers: [
        { text: "To declare a variable with an automatic storage duration", correct: true },
        { text: "To create automatic functions", correct: false },
        { text: "To automatically delete objects", correct: false },
        { text: "To declare constants", correct: false },
    ],
},
// 66. What is function template in C++?
// a. A function with multiple templates
// b. A function that can't be used with templates
// c. A generic function that can work with different data types
// d. A function that only works with a single data type
// Answer: c
{
    question: "What is function template in C++?",
    answers: [
        { text: "A function with multiple templates", correct: false },
        { text: "A function that can't be used with templates", correct: false },
        { text: "A generic function that can work with different data types", correct: true },
        { text: "A function that only works with a single data type", correct: false },
    ],
},
// 67. What is a destructor in C++?
// a. A function that constructs an object
// b. A function that doesn't do anything
// c. A function that destroys an object
// d. A function that deletes itself
// Answer: c
{
    question: "What is a destructor in C++?",
    answers: [
        { text: "A function that constructs an object", correct: false },
        { text: "A function that doesn't do anything", correct: false },
        { text: "A function that destroys an object", correct: true },
        { text: "A function that deletes itself", correct: false },
    ],
},
// 68. What is an access specifier in C++?
// a. A way to access variables directly
// b. A way to control the visibility of class members
// c. A way to define new data types
// d. A way to create classes
// Answer: b
{
    question: "What is an access specifier in C++?",
    answers: [
        { text: "A way to access variables directly", correct: false },
        { text: "A way to control the visibility of class members", correct: true },
        { text: "A way to define new data types", correct: false },
        { text: "A way to create classes", correct: false },
    ],
},
// 69. What is the 'sizeof' operator in C++ used for?
// a. To determine the size of an object or data type
// b. To allocate memory
// c. To create new objects
// d. To delete objects
// Answer: a
{
    question: "What is the 'sizeof' operator in C++ used for?",
    answers: [
        { text: "To determine the size of an object or data type", correct: true },
        { text: "To allocate memory", correct: false },
        { text: "To create new objects", correct: false },
        { text: "To delete objects", correct: false },
    ],
},
// 70. What is the purpose of the 'break' statement in C++?
// a. To exit a loop prematurely
// b. To start a new loop
// c. To continue the current loop
// d. To pause program execution
// Answer: a
{
    question: "What is the purpose of the 'break' statement in C++?",
    answers: [
        { text: "To exit a loop prematurely", correct: true },
        { text: "To start a new loop", correct: false },
        { text: "To continue the current loop", correct: false },
        { text: "To pause program execution", correct: false },
    ],
},
// 71. What is the scope resolution operator (::) used for in C++?
// a. To create a new scope
// b. To access global variables
// c. To define member functions of a class
// d. To access class-specific variables or functions
// Answer: d
{
    question: "What is the scope resolution operator (::) used for in C++?",
    answers: [
        { text: "To create a new scope", correct: false },
        { text: "To access global variables", correct: false },
        { text: "To define member functions of a class", correct: false },
        { text: "To access class-specific variables or functions", correct: true },
    ],
},
// 72. What is the 'const' keyword used for in C++?
// a. To declare a constant variable
// b. To create constructors
// c. To create classes
// d. To declare global variables
// Answer: a
{
    question: "What is the 'const' keyword used for in C++?",
    answers: [
        { text: "To declare a constant variable", correct: true },
        { text: "To create constructors", correct: false },
        { text: "To create classes", correct: false },
        { text: "To declare global variables", correct: false },
    ],
},
// 73. What is function overloading in C++?
// a. A way to overload a computer's processing capacity
// b. A way to overload a circuit
// c. A feature that allows multiple functions with the same name but different parameters
// d. A way to overload the network
// Answer: c
{
    question: "What is function overloading in C++?",
    answers: [
        { text: "A way to overload a computer's processing capacity", correct: false },
        { text: "A way to overload a circuit", correct: false },
        { text: "A feature that allows multiple functions with the same name but different parameters", correct: true },
        { text: "A way to overload the network", correct: false },
    ],
},
// 74. What is a 'friend' function in C++?
// a. A function that is friendly to the programmer
// b. A function that can access private and protected members of a class
// c. A function that can only be called by other member functions of the same class
// d. A function that can't have parameters
// Answer: b
{
    question: "What is a 'friend' function in C++?",
    answers: [
        { text: "A function that is friendly to the programmer", correct: false },
        { text: "A function that can access private and protected members of a class", correct: true },
        { text: "A function that can only be called by other member functions of the same class", correct: false },
        { text: "A function that can't have parameters", correct: false },
    ],
},
// 75. What is the purpose of the 'try' and 'catch' blocks in C++?
// a. To try out different coding blocks
// b. To measure code execution time
// c. To handle exceptions and errors
// d. To define new data types
// Answer: c
{
    question: "What is the purpose of the 'try' and 'catch' blocks in C++?",
    answers: [
        { text: "To try out different coding blocks", correct: false },
        { text: "To measure code execution time", correct: false },
        { text: "To handle exceptions and errors", correct: true },
        { text: "To define new data types", correct: false },
    ],
},
// 76. What is an abstract class in C++?
// a. A class that is very hard to understand
// b. A class with no functions
// c. A class that can't be used as a base class
// d. A class that can't be instantiated and is meant to be subclassed
// Answer: d
{
    question: "What is an abstract class in C++?",
    answers: [
        { text: "A class that is very hard to understand", correct: false },
        { text: "A class with no functions", correct: false },
        { text: "A class that can't be used as a base class", correct: false },
        { text: "A class that can't be instantiated and is meant to be subclassed", correct: true },
    ],
},
// 77. What is a 'namespace' in C++?
// a. A physical location in memory
// b. A way to avoid naming conflicts by organizing code into a distinct area
// c. A way to include external libraries
// d. A way to define class templates
// Answer: b
{
    question: "What is a 'namespace' in C++?",
    answers: [
        { text: "A physical location in memory", correct: false },
        { text: "A way to avoid naming conflicts by organizing code into a distinct area", correct: true },
        { text: "A way to include external libraries", correct: false },
        { text: "A way to define class templates", correct: false },
    ],
},
// 78. What is operator overloading in C++?
// a. Overloading of operators like +, -, *, etc.
// b. Overloading of functions
// c. Overloading of variables
// d. Overloading of memory
// Answer: a
{
    question: "What is operator overloading in C++?",
    answers: [
        { text: "Overloading of operators like +, -, *, etc.", correct: true },
        { text: "Overloading of functions", correct: false },
        { text: "Overloading of variables", correct: false },
        { text: "Overloading of memory", correct: false },
    ],
},
// 79. What is the purpose of the 'explicit' keyword in C++?
// a. To explicitly state a function's return type
// b. To prevent implicit type conversions in function calls
// c. To make a function public
// d. To enable automatic type conversions
// Answer: b
{
    question: "What is the purpose of the 'explicit' keyword in C++?",
    answers: [
        { text: "To explicitly state a function's return type", correct: false },
        { text: "To prevent implicit type conversions in function calls", correct: true },
        { text: "To make a function public", correct: false },
        { text: "To enable automatic type conversions", correct: false },
    ],
},
// 80. What is the 'volatile' keyword used for in C++?
// a. To make variables constant
// b. To indicate that a variable's value may change at any time
// c. To prevent variables from changing
// d. To indicate that a variable is global
// Answer: b
{
    question: "What is the 'volatile' keyword used for in C++?",
    answers: [
        { text: "To make variables constant", correct: false },
        { text: "To indicate that a variable's value may change at any time", correct: true },
        { text: "To prevent variables from changing", correct: false },
        { text: "To indicate that a variable is global", correct: false },
    ],
},
// 81. In C++, what is the purpose of the 'this' pointer?
// a. To refer to the next object in memory
// b. To access the current object's address
// c. To access static members of a class
// d. To create a new object
// Answer: b
{
    question: "In C++, what is the purpose of the 'this' pointer?",
    answers: [
        { text: "To refer to the next object in memory", correct: false },
        { text: "To access the current object's address", correct: true },
        { text: "To access static members of a class", correct: false },
        { text: "To create a new object", correct: false },
    ],
},
// 82. What is a smart pointer in C++?
// a. A pointer that is intelligent
// b. A pointer that doesn't need a declaration
// c. A pointer that manages the memory of a dynamically allocated object
// d. A pointer that can't be used in classes
// Answer: c
{
    question: "What is a smart pointer in C++?",
    answers: [
        { text: "A pointer that is intelligent", correct: false },
        { text: "A pointer that doesn't need a declaration", correct: false },
        { text: "A pointer that manages the memory of a dynamically allocated object", correct: true },
        { text: "A pointer that can't be used in classes", correct: false },
    ],
},
// 83. What is the 'new' operator used for in C++?
// a. To deallocate memory
// b. To create a new object of a class
// c. To dynamically allocate memory on the heap
// d. To create a new namespace
// Answer: c
{
    question: "What is the 'new' operator used for in C++?",
    answers: [
        { text: "To deallocate memory", correct: false },
        { text: "To create a new object of a class", correct: false },
        { text: "To dynamically allocate memory on the heap", correct: true },
        { text: "To create a new namespace", correct: false },
    ],
},
// 84. What is the 'delete' operator used for in C++?
// a. To delete a class definition
// b. To deallocate memory
// c. To remove a namespace
// d. To define a class
// Answer: b
{
    question: "What is the 'delete' operator used for in C++?",
    answers: [
        { text: "To delete a class definition", correct: false },
        { text: "To deallocate memory", correct: true },
        { text: "To remove a namespace", correct: false },
        { text: "To define a class", correct: false },
    ],
},
// 85. What is the purpose of the 'const_cast' operator in C++?
// a. To declare constant variables
// b. To remove the 'const' qualifier from a variable
// c. To add the 'const' qualifier to a variable
// d. To create a constant class
// Answer: b
{
    question: "What is the purpose of the 'const_cast' operator in C++?",
    answers: [
        { text: "To declare constant variables", correct: false },
        { text: "To remove the 'const' qualifier from a variable", correct: true },
        { text: "To add the 'const' qualifier to a variable", correct: false },
        { text: "To create a constant class", correct: false },
    ],
},
// 86. What is RAII in C++?
// a. A programming language
// b. Resource Acquisition Is Initialization, a C++ programming idiom
// c. A data structure
// d. A C++ compiler
// Answer: b
{
    question: "What is RAII in C++?",
    answers: [
        { text: "A programming language", correct: false },
        { text: "Resource Acquisition Is Initialization, a C++ programming idiom", correct: true },
        { text: "A data structure", correct: false },
        { text: "A C++ compiler", correct: false },
    ],
},
// 87. What is the 'constexpr' keyword used for in C++?
// a. To indicate that a function cannot throw exceptions
// b. To create constant variables
// c. To specify constant expressions evaluated at compile time
// d. To define class constructors
// Answer: c
{
    question: "What is the 'constexpr' keyword used for in C++?",
    answers: [
        { text: "To indicate that a function cannot throw exceptions", correct: false },
        { text: "To create constant variables", correct: false },
        { text: "To specify constant expressions evaluated at compile time", correct: true },
        { text: "To define class constructors", correct: false },
    ],
},
// 88. What is the purpose of the 'typeid' operator in C++?
// a. To identify the type of an object or expression
// b. To define types
// c. To allocate memory
// d. To compare objects
// Answer: a
{
    question: "What is the purpose of the 'typeid' operator in C++?",
    answers: [
        { text: "To identify the type of an object or expression", correct: true },
        { text: "To define types", correct: false },
        { text: "To allocate memory", correct: false },
        { text: "To compare objects", correct: false },
    ],
},
// 89. What is a 'lambda expression' in C++?
// a. An anonymous function
// b. A predefined function
// c. A function with global scope
// d. A class constructor
// Answer: a
{
    question: "What is a 'lambda expression' in C++?",
    answers: [
        { text: "An anonymous function", correct: true },
        { text: "A predefined function", correct: false },
        { text: "A function with global scope", correct: false },
        { text: "A class constructor", correct: false },
    ],
},
// 90. What is the purpose of the 'override' keyword in C++?
// a. To override the behavior of functions
// b. To indicate that a function is a constructor
// c. To specify a base class
// d. To indicate that a derived class function is intended to override a base class function
// Answer: d
{
    question: "What is the purpose of the 'override' keyword in C++?",
    answers: [
        { text: "To override the behavior of functions", correct: false },
        { text: "To indicate that a function is a constructor", correct: false },
        { text: "To specify a base class", correct: false },
        { text: "To indicate that a derived class function is intended to override a base class function", correct: true },
    ],
},
// 91. What is a 'friend' function in C++?
// a. A function that is friendly to the programmer
// b. A function that has access to the private members of a class
// c. A function declared in the 'friend' namespace
// d. A function that has global scope
// Answer: b
{
    question: "What is a 'friend' function in C++?",
    answers: [
        { text: "A function that is friendly to the programmer", correct: false },
        { text: "A function that has access to the private members of a class", correct: true },
        { text: "A function declared in the 'friend' namespace", correct: false },
        { text: "A function that has global scope", correct: false },
    ],
},
// 92. What is operator overloading in C++?
// a. Overloading the program with too many operators
// b. Adding new operators to the C++ language
// c. Providing multiple definitions for the same operator
// d. Replacing built-in operators with custom ones
// Answer: c
{
    question: "What is operator overloading in C++?",
    answers: [
        { text: "Overloading the program with too many operators", correct: false },
        { text: "Adding new operators to the C++ language", correct: false },
        { text: "Providing multiple definitions for the same operator", correct: true },
        { text: "Replacing built-in operators with custom ones", correct: false },
    ],
},
// 93. What is the 'const' qualifier used for in C++?
// a. To make variables constant
// b. To indicate a function is a constructor
// c. To specify a namespace
// d. To declare global variables
// Answer: a
{
    question: "What is the 'const' qualifier used for in C++?",
    answers: [
        { text: "To make variables constant", correct: true },
        { text: "To indicate a function is a constructor", correct: false },
        { text: "To specify a namespace", correct: false },
        { text: "To declare global variables", correct: false },
    ],
},
// 94. What is the 'virtual' keyword used for in C++?
// a. To declare virtual functions
// b. To allocate memory dynamically
// c. To specify a namespace
// d. To indicate a base class function can be overridden in derived classes
// Answer: d
{
    question: "What is the 'virtual' keyword used for in C++?",
    answers: [
        { text: "To declare virtual functions", correct: false },
        { text: "To allocate memory dynamically", correct: false },
        { text: "To specify a namespace", correct: false },
        { text: "To indicate a base class function can be overridden in derived classes", correct: true },
    ],
},
// 95. What is 'polymorphism' in C++?
// a. A form of memory management
// b. The ability of different classes to share the same memory
// c. The ability of objects of different classes to be treated as objects of a common base class
// d. A method for creating multiple instances of classes
// Answer: c
{
    question: "What is 'polymorphism' in C++?",
    answers: [
        { text: "A form of memory management", correct: false },
        { text: "The ability of different classes to share the same memory", correct: false },
        { text: "The ability of objects of different classes to be treated as objects of a common base class", correct: true },
        { text: "A method for creating multiple instances of classes", correct: false },
    ],
},
// 96. What is a 'pure virtual function' in C++?
// a. A function that doesn't have a body in the base class
// b. A function with the 'virtual' keyword
// c. A function that cannot be inherited
// d. A function that is defined in every derived class
// Answer: a
{
    question: "What is a 'pure virtual function' in C++?",
    answers: [
        { text: "A function that doesn't have a body in the base class", correct: true },
        { text: "A function with the 'virtual' keyword", correct: false },
        { text: "A function that cannot be inherited", correct: false },
        { text: "A function that is defined in every derived class", correct: false },
    ],
},
// 97. What is the purpose of the 'namespace' feature in C++?
// a. To define classes
// b. To create global variables
// c. To group related code into a named scope
// d. To declare virtual functions
// Answer: c
{
    question: "What is the purpose of the 'namespace' feature in C++?",
    answers: [
        { text: "To define classes", correct: false },
        { text: "To create global variables", correct: false },
        { text: "To group related code into a named scope", correct: true },
        { text: "To declare virtual functions", correct: false },
    ],
},
// 98. What is 'function overloading' in C++?
// a. Overloading a function with multiple definitions
// b. Overloading the program with too many functions
// c. Providing default arguments for functions
// d. Creating functions with the same name and parameters in different classes
// Answer: a
{
    question: "What is 'function overloading' in C++?",
    answers: [
        { text: "Overloading a function with multiple definitions", correct: true },
        { text: "Overloading the program with too many functions", correct: false },
        { text: "Providing default arguments for functions", correct: false },
        { text: "Creating functions with the same name and parameters in different classes", correct: false },
    ],
},
// 99. What is the purpose of the 'const' member function in C++?
// a. To indicate a function is constant
// b. To create constant variables
// c. To define constructors
// d. To modify object state
// Answer: a
{
    question: "What is the purpose of the 'const' member function in C++?",
    answers: [
        { text: "To indicate a function is constant", correct: true },
        { text: "To create constant variables", correct: false },
        { text: "To define constructors", correct: false },
        { text: "To modify object state", correct: false },
    ],
},
// 100. What is 'name hiding' in C++?
// a. A technique for changing variable names
// b. The practice of using long and descriptive variable names
// c. A method for preventing access to private members of a class
// d. The ability of a derived class to hide a base class member with the same name
// Answer: d
{
    question: "What is 'name hiding' in C++?",
    answers: [
        { text: "A technique for changing variable names", correct: false },
        { text: "The practice of using long and descriptive variable names", correct: false },
        { text: "A method for preventing access to private members of a class", correct: false },
        { text: "The ability of a derived class to hide a base class member with the same name", correct: true },
    ],
},
// 101. What is encapsulation in object-oriented programming?
// a. A process of breaking down a class into smaller units
// b. The concept of bundling data and methods that operate on that data into a single unit
// c. A way to convert objects into data structures
// d. The process of converting a class into a pure virtual class
// Answer: b
{
    question: "What is encapsulation in object-oriented programming?",
    answers: [
        { text: "A process of breaking down a class into smaller units", correct: false },
        { text: "The concept of bundling data and methods that operate on that data into a single unit", correct: true },
        { text: "A way to convert objects into data structures", correct: false },
        { text: "The process of converting a class into a pure virtual class", correct: false },
    ],
},
// 102. In object-oriented programming, what does inheritance allow you to do?
// a. Copy data from one class to another
// b. Create new classes that reuse properties and behaviors of existing classes
// c. Create classes that cannot be instantiated
// d. Create private members in a class
// Answer: b
{
    question: "In object-oriented programming, what does inheritance allow you to do?",
    answers: [
        { text: "Copy data from one class to another", correct: false },
        { text: "Create new classes that reuse properties and behaviors of existing classes", correct: true },
        { text: "Create classes that cannot be instantiated", correct: false },
        { text: "Create private members in a class", correct: false },
    ],
},
// 103. What is polymorphism in object-oriented programming?
// a. The practice of overloading operator symbols
// b. The ability to represent objects of different classes using a common base class
// c. The process of creating multiple copies of an object
// d. A way to hide the implementation details of a class
// Answer: b
{
    question: "What is polymorphism in object-oriented programming?",
    answers: [
        { text: "The practice of overloading operator symbols", correct: false },
        { text: "The ability to represent objects of different classes using a common base class", correct: true },
        { text: "The process of creating multiple copies of an object", correct: false },
        { text: "A way to hide the implementation details of a class", correct: false },
    ],
},
// 104. What is the primary purpose of the 'interface' concept in OOP?
// a. To define the appearance and layout of user interfaces
// b. To specify the external behavior of a class without providing the internal details
// c. To implement mathematical functions in classes
// d. To create abstract classes with no concrete methods
// Answer: b
{
    question: "What is the primary purpose of the 'interface' concept in OOP?",
    answers: [
        { text: "To define the appearance and layout of user interfaces", correct: false },
        { text: "To specify the external behavior of a class without providing the internal details", correct: true },
        { text: "To implement mathematical functions in classes", correct: false },
        { text: "To create abstract classes with no concrete methods", correct: false },
    ],
},

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState ();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
 function resetState (){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const SelectedBtn = e.target;
    const isCorrect = SelectedBtn.dataset.correct === "true";
    if(isCorrect){
        SelectedBtn.classList.add("correct");
        score++;
    }
    else{
        SelectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
 nextButton.addEventListener("click",()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}
else{
    startQuiz();
}
 });
startQuiz();