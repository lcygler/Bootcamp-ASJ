using System;

namespace CSharpHolaMundo
{
  class HolaMundo
  {
    static void Main(string[] args)
    {
      // Comentario

      /*
      Comentario multilínea
      */

      Console.WriteLine("Hola Mundo!");

      // Tipos de datos
      string myString = "Cadena de texto";
      Console.WriteLine(myString);

      int myInt = 10;
      Console.WriteLine(myInt);

      float myFloat = 3.14f;
      Console.WriteLine(myFloat);

      double myDouble = 3.14159;
      Console.WriteLine(myDouble);

      decimal myDecimal = 123.456m;
      Console.WriteLine(myDecimal);

      bool myBool = true;
      Console.WriteLine(myBool);

      char myChar = 'A';
      Console.WriteLine(myChar);

      byte myByte = 255;
      Console.WriteLine(myByte);

      short myShort = 1000;
      Console.WriteLine(myShort);

      dynamic myDinamic = 5;
      myDinamic = "Dato dinámico";
      Console.WriteLine(myDinamic);

      var myVar = "Variable de tipo inferido";
      // myVar = 5; Error
      Console.WriteLine(myVar);

      DateTime myDateTime = DateTime.Now;
      Console.WriteLine(myDateTime);

      // Interpolación de cadenas
      Console.WriteLine($"Entero: {myInt}, Double: {myDouble}");

      // Constantes (se debe especificar el tipo)
      const string MyConst = "Constante";
      Console.WriteLine(MyConst);
      PrintLn();

      // Estructuras de datos
      // Arrays
      var myArray = new string[] { "Elemento 1", "Elemento 2" };
      Console.WriteLine(myArray[1]);
      PrintLn();

      myArray[1] = "Elemento modificado";
      Console.WriteLine(myArray[1]);
      PrintLn();

      // myArray[0] = 5; Error
      // myArray[2] = 5; Error

      // Diccionarios
      var myDictionary1 = new Dictionary<string, int>();

      // Agregar elemento
      myDictionary1.Add("Elemento 1", 1);
      myDictionary1.Add("Elemento 2", 2);
      PrintDictionary(myDictionary1);

      // Remover elemento
      myDictionary1.Remove("Elemento 2");
      PrintDictionary(myDictionary1);

      myDictionary1["Elemento 2"] = 2;
      Console.WriteLine(myDictionary1["Elemento 2"]);
      PrintDictionary(myDictionary1);

      var myDictionary2 = new Dictionary<string, int>
      {
        {"Elemento 1", 1},
        {"Elemento 2", 2},
        {"Elemento 3", 3}
      };

      // Sets (sin duplicados)
      var mySet = new HashSet<string> { "Elemento 1", "Elemento 2", "Elemento 3", "Elemento 3" };
      Console.WriteLine(mySet.Contains("Elemento 1"));
      PrintLn();

      // Tuplas
      var myTuple = (1, "Elemento 1");
      Console.WriteLine(myTuple.Item1);
      Console.WriteLine(myTuple.Item2);

      // Bucles
      for (int i = 0; i < 10; i++)
      {
        Console.WriteLine(i);
      }

      foreach (var item in myArray)
      {
        Console.WriteLine(item);
      }

      foreach (var item in myDictionary1)
      {
        Console.WriteLine(item);
      }


      foreach (var item in mySet)
      {
        Console.WriteLine(item);
      }

      // Flujos
      if (myInt == 11 && myBool == true)
      {
        Console.WriteLine("El valor es 11");
      }
      else if (myInt == 12 || myBool == false)
      {
        Console.WriteLine("El valor es 12");
      }
      else
      {
        Console.WriteLine("El valor no es 11 ni 12");
      }

      // Clases
      var myClass = new MyClass("Juan");
      Console.WriteLine(myClass.MyName);

      myClass.MyName = "Pedro";
      Console.WriteLine(myClass.MyName);
    }

    // Funciones
    static void PrintDictionary(Dictionary<string, int> dictionary)
    {
      foreach (var kvp in dictionary)
      {
        Console.WriteLine($"{kvp.Key}: {kvp.Value}");
      }

      PrintLn();
    }

    static void PrintLn()
    {
      Console.WriteLine("---");
    }

    // Clases
    class MyClass
    {
      public string MyName { get; set; }

      public MyClass(string myName)
      {
        this.MyName = myName;
      }
    }

    class MyClass2(string myName)
    {
      public string MyName { get; set; } = myName;
    }
  }
}
