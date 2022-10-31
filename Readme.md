## **- Shopping List -**

<br>

#### **| Gestión de ramas |**

<br>
En este proyecto crearemos diversas ramas para cada funcionalidad, principalmente tendremos la development donde iremos mergeando las implementaciones de las subramas.

<br>

### **| Comienzo del proyecto |**

<br>
Lo primero que realizamos es un commit inicial para luego realizar una gestión de la pantalla con los principales componentes haciendo uso de <code>flex</code> aplicado en los <code>View</code>.

<br/>

Además en el <code>App.js</code> crearemos un <code>useState</code> que llamaremos **productList** al que asignaremos un array por defecto. Usaremos la función <code>addProductHandler</code> que será llamada y actualizada en otro componente, para ir añadiendo objetos a la lista .

- **<code>const [ productList, setProductList ] = useState([])</code>**

<br/>

### **| Desarrollo de las ramas |**

<br/>

> **productInput**

- En la rama productInput crearemos un componente <code>ProductInput</code> donde desarrollamos el apartado de la introducción de datos en la que crearemos diferentes <code>TextInput</code> a los cuales asinaremos valores de un objeto desde un <code>useState</code> que llamaremos **product** donde actualizaremos los valores de la lista por medio de una función creada en el <code>App.js</code>

- - **<code>const [ product, setProduct ] = useState({ <br/>
    name:'', <br/>
    quantity: 0, <br/>
    type:'', <br/>
    bought: false <br/>
  })</code>**

> **dropdown**
- Para uno de los datos que solicitamos es necesario el uso de un desplegable, para ello creamos un componente llamado <code>DropdownType.jsx</code> que llamaremos en el componente <code>ProductInput</code> y pasaremos como props el objeto **product**. Utilizaremos <code>Dropdown</code>, para ello instalaremos su librería y lo importaremos :

- - <pre><code>npm install react-native-element-dropdown</code></pre> 

- - <pre><code>import { Dropdown } from 'react-native-element-dropdown</code></pre> 

- Luego crearemos un array con las opciones que queremos posibles y el valor que le daremos a cada una, para después aplicarlo en la propiedad <code>data</code> al usar <code>Dropdown</code>.

> **listItem**
- En esta rama crearemos el componente <code>listItem.jsx</code> que será llamado en <code>App.js</code> al que le pasaremos como prop **productList** y usaremos **map** para pasarle los datos a otro componente, <code>Item</code> que representará cada producto y en el que colocaremos el diseño de como queremos que se visualice.

- - **<code>productList.map( (product) => ( <br/>
         < Item  <br/>
            key={product.id} <br/>
            id={product.id}  <br/>
            productName={product.name} <br/>
            productQuantity={product.quantity} <br/>
            productType={product.type} <br/>
            productBought={product.bought}/><br/>
          ))</code>**

### **| Paleta de colores |**
<br/>

- https://m2.material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=E8B775&secondary.color=77B80A&primary.text.color=000000&secondary.text.color=454f27 

<br/>

### **| Conclusión del Proyecto |**
<br/>
Este proyecto me ha parecido completo, en el que practicamos el uso de los array con objetos y el manejo de datos entre componentes.