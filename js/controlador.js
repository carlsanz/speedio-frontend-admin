
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

function validarFormulario() {
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');

    const email = emailInput.value;
    const contrasena = contrasenaInput.value;

    // Expresión regular para validar el email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
      
    } else {
      alert('Email inválido');
      return;
    }

    // Verificar que la contraseña tenga al menos 6 caracteres
    if (contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      ingreso()
    }

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

  function repartidores() {
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