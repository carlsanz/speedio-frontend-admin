
  let usertxt = document.getElementById("email");
  let passwordtxt = document.getElementById("contrasena");
  let botonIngresar = document.getElementById("boton-inicio-sesion");

function inicio() {

  document.getElementById("inicio-sesion").style.display="block";
  document.getElementById("inicio").style.display="none";
  document.getElementById("inicio-empleados").style.display= "none";
  document.getElementById("pedidos-sin-tomar").style.display= "none";
  document.getElementById("empresas").style.display= "none";
  document.getElementById("agregar-empresa").style.display= "none";
  document.getElementById("productos").style.display= "none";
  document.getElementById("productos-Disponibles").style.display= "none";
  document.getElementById("agregar-Productos").style.display= "none";
  document.getElementById("perfil").style.display= "none";
}
inicio();

botonIngresar.addEventListener("click", () => {
  loginAdmin(usertxt.value, passwordtxt.value);
});

const loginAdmin = async (user, password) => {

  let respuesta = await fetch(`http://localhost:3000/admins/login`, {
      method: 'POST',
      headers: {
          
          "Content-Type": "application/json", //MIME Type
      },
      body: JSON.stringify(
          {
            "correo_electronico": `${document.getElementById("email").value}`,
            "contraseña": `${document.getElementById("contrasena").value}`
          }
      )
      
  });
  
  let usuario = await respuesta.json();
  console.log(usuario.status)
  if (usuario.status==true) {
    ingreso()
  }else{
    validarFormulario();
  }
  
}

function validarFormulario() {
  return alert('Email invalido o contraseña incorrecta');
}


  function ingreso() {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="block";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";

  }

  const repartidores = async()=> {
    let respuesta = await fetch(`http://localhost:3000/motoristas/activo/dis`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", //MIME Type
    }
  });
    let motoristasActivos = await respuesta.json();
    console.log(motoristasActivos);
  
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
   
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "block";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";

    for (let i = 0; i < motoristasActivos.length; i++) {
      document.getElementById("repartidores-activos").innerHTML+=
      `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;justify-items: center; align-items: center; background-color: #FFFFFF; margin-left: 20px; margin-right: 15px;border-radius: 10px; margin-bottom: 15px">
      <div>
          <div style="display: flex; align-items: center;">
              <div>
                  <i  style="margin-right: 20px; font-size: 3rem;" class="fa-solid fa-circle-user"></i>
              </div>
              <div>
                  <p class="info-repartidores">${motoristasActivos[i].nombre+" "+motoristasActivos[i].apellido}</p>
                  <p class="info-repartidores">Usuario: ${motoristasActivos[i].nombre}</p>
                  <p class="info-repartidores">Telefono: ${motoristasActivos[i].telefono}</p>
              </div>
          </div>
          
      </div>
      <div>
         <p class="info-repartidores">000243</p>
      </div>
      <div>
          <p class="info-repartidores">Col. las Lomas esquina opuesta edificio plaza azul</p>
      </div>

  </div>`;
      
    }

    let respuest = await fetch(`http://localhost:3000/motoristas/sin_pedido/dis`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json", //MIME Type
    }
  });
    let motoristaSinPedido = await respuest.json();
    console.log(motoristaSinPedido);

    for (let i = 0; i < motoristaSinPedido.length; i++) {
      document.getElementById("repartidores-sin-pedido").innerHTML+=
      `<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;justify-items: center; align-items: center; background-color: #FFFFFF; margin-left: 20px; margin-right: 15px;border-radius: 10px; margin-bottom: 15px">
      <div>
          <div style="display: flex; align-items: center;">
              <div>
                  <i  style="margin-right: 20px; font-size: 3rem;" class="fa-solid fa-circle-user"></i>
              </div>
              <div>
                  <p class="info-repartidores">${motoristaSinPedido[i].nombre+" "+motoristaSinPedido[i].apellido}</p>
                  <p class="info-repartidores">Usuario: ${motoristaSinPedido[i].nombre}</p>
                  <p class="info-repartidores">Telefono: ${motoristaSinPedido[i].telefono}</p>
              </div>
          </div>
          
      </div>
      <div>
         <p class="info-repartidores">000023</p>
      </div>
      <div>
          <p class="info-repartidores">Residencial Miraflores</p>
      </div>

  </div>`;
      
    }


  }

  function asignarPedido() {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "block";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";


  }

  function generarPantallaEmpresa() {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "block";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";

  }

  agregarEmpresa = () =>{
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "block";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";
  }

  productos =() => {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "block";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";
  }

  productosDisponibles = () => {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "block";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "none";
  }

  agregarProductos = () => {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "block";
    document.getElementById("perfil").style.display= "none";
  }

  perfilAdministrador = () => {
    document.getElementById("body").style.backgroundImage="linear-gradient(#FFFFFF, #FFFFFF)";
    
    document.getElementById("inicio-sesion").style.display="none";
    document.getElementById("inicio").style.display="none";
    document.getElementById("inicio-empleados").style.display= "none";
    document.getElementById("pedidos-sin-tomar").style.display= "none";
    document.getElementById("empresas").style.display= "none";
    document.getElementById("agregar-empresa").style.display= "none";
    document.getElementById("productos").style.display= "none";
    document.getElementById("productos-Disponibles").style.display= "none";
    document.getElementById("agregar-Productos").style.display= "none";
    document.getElementById("perfil").style.display= "block";
  }