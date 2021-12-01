const frame = new Frame(FIT, 1024, 768, light, dark);
frame.on("ready", () => {
	const stage = frame.stage;
	let stageW = frame.width;
	let stageH = frame.height;

	// Crea una variable de tipo Button para 
	// la pantalla.

	// Crea una variable de tipo Button para cada uno de
	// los botones de la calculadora.

	// La calculadora quedará así:
	//  _______________
	// |               |
	// |               |
	// |_______________|
	// |   |   |   |   |
	// | 7 | 8 | 9 | + |
	// |___|___|___|___|
	// |   |   |   |   |
	// | 4 | 5 | 6 | - |
	// |___|___|___|___|
	// |   |   |   |   |
	// | 1 | 2 | 3 | * |
	// |___|___|___|___|
	// |   |   |   |   |
	// | 0 | . | = | / |
	// |___|___|___|___|

	// Crea una variable de tipo Tile para organizar
	// los botones, con 5 filas y 4 columnas.
	// Coloca dicho objeto en el centro de la pantalla.
	// Coloca la pantalla encima de los botones.

	// Crea un manejador del evento 'click' para cada 
	// uno de los botones. En casi todos los botones, 
	// lo único que tiene que hacer el manejador es
	// añadir el texto del propio botón al de la pantalla:
	// 'pantalla.text = pantalla.text + botón.text;'
	// El único diferente es el botón '='.
	// El manejador del botón '=' debe evaluar la
	// operación que hay en la pantalla, y mostrar el
	// resultado en la propia pantalla.
	// Para evaluar la operación usaremos la función 'eval',
	// guardando el resultado en el texto de la pantalla:
	// 'pantalla.text = eval(pantalla.text);'
	// No olvides que al final del manejador debe ir:
	// 'stage.update();'
	// para que se actualice la pantalla.

	// Añade cada manejador de evento al botón correspondiente.

	// Posible mejora:
	// - Incluir un botón para borrar la pantalla.

	stage.update();
});