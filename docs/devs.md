# Estructura y consideraciones técnicas

## Estructura

En la raíz del proyecto se pueden encontrar los siguientes archivos y directorios, ignorando
aquellos que son de configuración o por ejemplo el `node_modules`.

```
.
├── App.js
├── app.json
├── components
├── index.js
├── styles.js
└── __tests__
```

Lo importante es notar la carpeta de `componentes`, ya que es donde están todos los componentes
necesarios para nuestra aplicación.
Podemos ver el tree de esta carpeta:

```
.
├── generics
│   ├── hooks
│   │   ├── useFetch.js
│   │   └── useRefresh.js
│   └── (...)
├── MainScreen
│   ├── HomeScreen
│   │   └── (...)
│   ├── index.js
│   ├── MainContext.js
│   ├── MainScreen.js
│   ├── mainService.js
│   └── MenuScreen
│       └── (...)
└── VideoScreen
    └── (...)
```

- `generics`: contiene componentes genéricos que se pueden llegar a querer usar en varias partes de
  la aplicación ya que no son propios de una pantalla en sí. También contiene customs hooks.
- Después se puede encontrar una carpeta por cada pantalla de la navegación root, en este caso
  tenemos `MainScreen` (pantalla de Home+Menu) y `VideoScreen` (pantalla de reproducción de un video).

Dentro de cada carpeta de componentes se pueden encontrar varios otros componentes o pantallas que
se usan en este, como es el caso de `MainScreen` que usa `HomeScreen` y `MenuScreen`. También se
pueden encontrar archivos de context o service según sea necesario para la pantalla.
Por esta cantidad de cosas que se pueden encontrar para cada pantalla se decidió tener una
estructura donde cada una tenga su carpeta con el mismo nombre del componente de la pantalla y
dentro de esta carpeta tener un `index.js`, donde solo exportamos lo que queremos que se pueda usar
desde afuera, generalmente termina siendo solo los componentes principales para cada pantalla, como
es el caso del componente `MainScreen`.

## Consideraciones tecnicas

### Listado de videos y reproducción

En las pantallas donde se enlistan los videos se decidió mostrar solo un thumbnail para cada uno, el
cual se mockeó.
Esto tiene varias ventajas a la hora de considerar performance, ya que no se está teniendo que
renderizar todos los videos de una. Y renderizar todos los videos juntos no es solo un problema para
la performance de la aplicación, sino también para el uso de la conexión a internet del usuario.
Además de eso, de esta forma también logramos simplificar el código, ya que la cantidad de casos o
cosas a manejar cuando se tienen todos los videos listados es grande.Un caso muy claro es el de 
parar un video cuando ya no se está mostrando en la pantalla, cuando se pone otro a reproducir o
cuando el usuario se mueve a otra pantalla.
