function toggleSubMenu() {
	var submenu = document.getElementById('Gc-submenu-content');
	submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

function FinanceSubMenu() {
	var submenu = document.getElementById('Gc-Finance-Submenu');
	submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

function OperationSubMenu() {
	var submenu = document.getElementById('Gc-Operations-submenu');
	submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}
function MarketingSubMenu() {
	var submenu = document.getElementById('Gc-Marketing-submenu');
	submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}
function CustomerSubMenu() {
	var submenu = document.getElementById('Gc-Customer-submenu');
	submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}



function hideAllSubmenus() {
  var submenus = document.querySelectorAll('.Gc-submenu');
  submenus.forEach(function(submenu) {
      submenu.style.display = 'none';
  });
}



// TOGGLE SIDEBAR#content
// TOGGLE SIDEBAR

const menuBar = document.querySelector('#Gc-content nav .bx.bx-menu');
const sidebar = document.getElementById('Gc-sidebar');
const chevronDownIcon = document.querySelector('.Gc-Dropdown .bx-chevron-down');



menuBar.addEventListener('click', function () {
  hideAllSubmenus();
    sidebar.classList.toggle('hide');
    chevronDownIcon.classList('hide');
  
   

});










const searchButton = document.querySelector('#Gc-content nav form .form-input button');
const searchButtonIcon = document.querySelector('#Gc-content nav form .form-input button .bx');
const searchForm = document.querySelector('#Gc-content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



function mydropFunction() {
    var GcprofileTrigger = document.getElementById('Gc-profileTrigger');
    var myDropdown = document.getElementById('myDropdown');

    GcprofileTrigger.addEventListener('click', function (e) {
        // Toggle the display of the dropdown
		myDropdown.classList.toggle('Gcdrop-show');
        
    });
}
