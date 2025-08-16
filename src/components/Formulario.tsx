

function Formulario() {
  return (
      
<form>
  
  <fieldset>Detalles Personales</fieldset>
  <div>
    <h1>Saludo</h1>
    <select>
    <option value="">Ninguno</option>
    <option value="">Sr</option>
    <option value="">Sra</option>
    <option value="">Srta</option>
  </select>
  </div>

<label >Nombre</label><br/>
<input type="text" value="Nombre" required placeholder="Ingrese su Nombre"></input><br/>

<label >Apellido</label><br/>
<input type="text" value="Apellido" required placeholder="Ingrese su Apellido"></input><br/>

<legend>Genero</legend>
<input type="button" value="M" required></input>
<input type="button" value="f" required></input>

<label >Email</label><br/>
<input type="email" value="Email" required placeholder="Ingrese su Correo"></input><br/>

<label >Fecha de Nacimiento</label><br/>
<input type="date" value="fechanacimiento"></input><br/>

<label> Direccion</label><br/>
<input type="" value="Direccion" required placeholder="Ingrese su Direccion"></input><br/>

    </form>
  )
}

export default Formulario