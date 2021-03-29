(function(){
	var actualizarHora = function(){
		var fecha = new Date();
		var horas = fecha.getHours();
		var ampm;
		var minutos = fecha.getMinutes();
		var segundos = fecha.getSeconds();
		var diaSemana = fecha.getDay();
		var dia = fecha.getDate();
		var mes = fecha.getMonth();
		var year = fecha.getFullYear();

		var pAMPM = document.getElementById('ampm');
		var pHoras =  document.getElementById('horas');
		var pMinutos  = document.getElementById('minutos');
		var pSegundos = document.getElementById('segundos');
		var pDiaSemana = document.getElementById('diaSemana');
		var pDia = document.getElementById('dia');
		var pMes = document.getElementById("mes");
		var pYear = document.getElementById('year');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;

		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',  'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];

		pYear.textContent = year;

		if (horas >= 12){
			horas = horas - 12;
			ampm = 'PM'
		}else{
			ampm = 'AM'
		}

		if (horas == 0){
			horas = 12;
		}

		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10){
			minutos = '0' + minutos;
		}

		if (segundos < 10){
			segundos = '0' + segundos;
		}

		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
		
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())