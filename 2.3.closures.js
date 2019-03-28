function test() {

  console.log( window );

  var window = 5;

  console.log( window );
}

test();
// undefined потому что выводет локальную переменную
// 5 срабатывает присваивание