

function Formulario() {
  return (
    <form>
    <fieldset>
   <legend>Detalles Personales</legend>
        <div>
     <label htmlFor="saludo">Saludo</label>
    <select name="saludo" required>
 <option value="">Ninguno</option>
 <option value="Sr">Sr</option>
 <option value="Sra">Sra</option>
  <option value="Srta">Srta</option>
 </select>
   </div>

  <div>
  <label htmlFor="nombre">Nombre</label><br />
  <input type="text" id="nombre" name="nombre" required placeholder="Ingrese su Nombre" /><br />
    </div>

        <div>
          <label htmlFor="apellido">Apellido</label><br />
          <input type="text" id="apellido" name="apellido" required placeholder="Ingrese su Apellido" /><br />
        </div>

        <div>
          <label>Género</label><br />
          <input type="radio" id="generoM" name="genero" value="M" required />
          <label htmlFor="generoM">M</label>
          <input type="radio" id="generoF" name="genero" value="F" required />
          <label htmlFor="generoF">F</label><br />

        </div>


        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" required placeholder="Ingrese su Email" /><br />
        </div>

        <div>
          <label htmlFor="fechanacimiento">Fecha de Nacimiento</label><br />
          <input type="date" id="fechanacimiento" name="fechanacimiento" required /><br />
        </div>


        <div>
          <label htmlFor="direccion">Dirección</label><br />
          <input type="text" id="direccion" name="direccion" required placeholder="Ingrese su Dirección" /><br />
        </div>


      </fieldset>
    </form>
  )
}

export default Formulario