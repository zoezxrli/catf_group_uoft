/*--------------------------------------------------------------------
GGR472 WEEK 8: JavaScript for Web Maps
Adding elements and interactivity to the map (JavaScript legend and events)
--------------------------------------------------------------------*/

/*--------------------------------------------------------------------
APPLICATION DATA
--------------------------------------------------------------------*/
let app = {
	indices: [
		{
			id: 'cihccs',
			geojsonKey: 'Africa_c13',
			name: 'Composite Index Hydrogen & CCS'
		},
		{
			id: 'sp',
			geojsonKey: 'Africa_c_7',
			name: 'System Performance Index',
			subindices: [
				{
					id: 'edg',
					geojsonKey: 'Africa_c15',
					name: 'Economic Development and Growth'
				},
				{
					id: 'es',
					geojsonKey: 'Africa_c16',
					name: 'Environmental Sustainability'
				},
				{
					id: 'eas',
					geojsonKey: 'Africa_c17',
					name: 'Energy Acces and Security'
				}
			]
		},
		{
			id: 'tr',
			geojsonKey: 'Africa_c_8',
			name: 'Transition Readiness Index',
			subindices: [
				{
					id: 'rpc',
					geojsonKey: 'Africa_c19',
					name: 'Regulation and Political Commitment'
				},
				{
					id: 'ci',
					geojsonKey: 'Africa_c20',
					name: 'Capital and Investment'
				},
				{
					id: 'ig',
					geojsonKey: 'Africa_c21',
					name: 'Institutions and Governance'
				},
				{
					id: 'ibe',
					geojsonKey: 'Africa_c22',
					name: 'Infrastructure and Business Envrionment'
				},
				{
					id: 'hc',
					geojsonKey: 'Africa_c23',
					name: 'Human Capital'
				},
				{
					id: 'pss',
					geojsonKey: 'Africa_c24',
					name: 'Power System Structure'
				}
			]
		},
		{
			id: 'tshccs',
			geojsonKey: 'Africa_c14',
			name: 'Tech Specific Hydrogen & CCS',
			subindices: [
				{
					id: 'tsccs',
					geojsonKey: 'Africa_c10',
					name: 'Tech Specific CCS'
				},
				{
					id: 'tsh',
					geojsonKey: 'Africa_c_9',
					name: 'Tech Specific Hydrogen'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'tsccs',
			geojsonKey: 'Africa_c10',
			name: 'Tech Specific CCS',
			subindices: [
				{
					id: 'tshccs',
					geojsonKey: 'Africa_c14',
					name: 'Tech Specific Hydrogen & CCS'
				},
				{
					id: 'tsh',
					geojsonKey: 'Africa_c_9',
					name: 'Tech Specific Hydrogen'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'tsh',
			geojsonKey: 'Africa_c_9',
			name: 'Tech Specific Hydrogen',
			subindices: [
				{
					id: 'tshccs',
					geojsonKey: 'Africa_c14',
					name: 'Tech Specific Hydrogen & CCS'
				},
				{
					id: 'tsccs',
					geojsonKey: 'Africa_c10',
					name: 'Tech Specific CCS'
				},
				{
					id: 'bbpt',
					geojsonKey: 'Africa_c33',
					name: 'Tech Specific - Biomass-based Power'
				},
				{
					id: 'hpt',
					geojsonKey: 'Africa_c34',
					name: 'Tech Specific - Hydropower'
				},
				{
					id: 'npt',
					geojsonKey: 'Africa_c35',
					name: 'Tech Specific - Nuclear Power'
				},
				{
					id: 'gpt',
					geojsonKey: 'Africa_c36',
					name: 'Tech Specific - Geothermal Power'
				},
				{
					id: 'ngtp',
					geojsonKey: 'Africa_c37',
					name: 'Tech Specific - Natural Gas Turbine Power'
				},
				{
					id: 'wtt',
					geojsonKey: 'Africa_c38',
					name: 'Tech Specific - Wind Turbines'
				},
				{
					id: 'st',
					geojsonKey: 'Africa_c39',
					name: 'Tech Specific - Solar'
				},
			]
		},
		{
			id: 'cih',
			geojsonKey: 'Africa_c11',
			name: 'Composite Index Hydrogen'
		},
		{
			id: 'ciccs',
			geojsonKey: 'Africa_c12',
			name: 'Composite Index CCS'
		}
	],
	
	countries: [
		"Kenya", "Rwanda", "Ethiopia", "Tanzania", "Ghana", "Nigeria", "Senegal"
	],
	
	colorLegend: {
		labels: [ '0-24 Poor ', '25-49 Low', '50-74 Moderate',  '75-89 Good', '> 90 Excellent' ],
		colors: [    '#bd0026',   '#9B4D00',        '#FFA500',     '#FFFF00',        '#32CD32' ],
		levels: [            0,          25,               50,            75,               90 ]
	},
	
	selectedIndexId: null,
	selectedCountries: []
}

/*--------------------------------------------------------------------
MAPBOX MAP
--------------------------------------------------------------------*/
mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmEtYW5pc2hjaCIsImEiOiJjbTVvN2podncwanJ5Mm1wbnNuczl6c214In0.2ltrEF0cJrURbPWpaKr9bg'; //***ADD YOUR ACCESS TOKEN HERE***

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // or select existing mapbox style - https://docs.mapbox.com/api/maps/styles/
    center: [25, 10],
    zoom: 2.5,
    // maxBounds: [
    //     [140,0], // Southwest
    //     [25, 85]  // Northeast
    // ],
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    countries: "dz,ao,ben,bw,bf,bi,cm,cv,cf,td,km,cd,mg,ml,mr,ma,mu,na,ne,ng,sc,sl,so,za,ss,sd,tn,ug,zw,ke,lr,ly,mz,sn,sz,tz,tg,zm,ci,gh,et,rw,gn,gw,ls,zm,mw"
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Function for creating a map layer
function mapAddLayer(layerId, geojsonProperty) {
	
	colorLevelparam = [
		'step', // STEP expression produces stepped results based on value pairs
		['get', geojsonProperty], // GET expression retrieves property value from 'population' data field
	];
	
	// append all levels and colors from our color legend
	for (let i = 0; i < app.colorLegend.colors.length; i++) {
		// all arrays in app.colorLegend have the same length,
		// so can use same i to access them all
		if (app.colorLegend.levels[i] != 0) // skip '0' level
			colorLevelparam.push(app.colorLegend.levels[i]);

		colorLevelparam.push(app.colorLegend.colors[i]);
	}
	
	map.addLayer({
		'id': layerId,
		'type': 'fill',
		'source': 'africa-geojson',
		'paint': {
			'fill-color': colorLevelparam,
			'fill-opacity': 0.5,
			'fill-outline-color': 'white'
		},
		'source-layer': 'AfricaProjectFileZip-04v9i9',
		'layout': {
			'visibility': 'none'  // Set this layer to be hidden initially
		}
	});
}

//Add data source and draw initial visiualization of layer
map.on('load', () => {
    map.addSource('africa-geojson', {
        'type': 'vector',
        'url': 'mapbox://elena-anishch.99t49rnp'
    });
	
	// create a map layer for each index
	app.indices.forEach(index => mapAddLayer(index.id, index.geojsonKey));


	// Add event listener which returns map view to full screen on button click using flyTo method
	document.getElementById('returnbutton').addEventListener('click', () => {
		map.flyTo({
			center: [25, 10],
			zoom: 2.5,
			essential: true
		});
	});
	
	// select the first index
	document.getElementById('layercheck_' + app.indices[0].id).click();
});


function getLegendInfo(value) {
	for (let i = app.colorLegend.levels.length - 1; i >= 0; i--) {
		if (value >= app.colorLegend.levels[i]) {
			return {
				color: app.colorLegend.colors[i],
				label: app.colorLegend.labels[i]
			};
		}
	}
	return { color: '#ccc', label: 'No Data' }; // Default if value is missing
}

// Add click events to each map layer
app.indices.forEach(function(index) {
	map.on('click', index.id, (e) => {
		console.log(index.id + ' layer clicked')
		// Check if the layer is visible
		const currentVisibility = map.getLayoutProperty(index.id, 'visibility');

		// If the layer is not visible, do nothing
		if (currentVisibility === 'none') {
			return;  // Prevent the popup from being shown when the layer is hidden
		}

		// Proceed with showing the popup if the layer is visible
		const feature = e.features[0];

		if (feature.properties && feature.properties[index.geojsonKey] && feature.properties.NAME) {
			const val = feature.properties[index.geojsonKey];
			const countryName = feature.properties.NAME;
			const { color, label } = getLegendInfo(val);
			let popupContent = `
            <h3>${countryName}</h3> 
            <h4>${index.name}: <strong>${val}</strong></h4>
            <div class="mb-3" style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 30px; opacity: 0.5; height: 12px; border: 1px solid #999; background-color: ${color}; border-radius: 10px"></div>
                <span>${label}</span>
            </div>
            <ol>`;

			if ('subindices' in index) {
				for (let i = 0; i < index.subindices.length; i++) {
					let si = index.subindices[i];
					popupContent += `<li class="mb-1">${si.name}: ${feature.properties[si.geojsonKey]}</li>`;
				}
			}
			popupContent += `</ol>`
			const popup = new mapboxgl.Popup()
				.setLngLat(e.lngLat)
				.setHTML(popupContent)
				.addTo(map);

			// Bind the change event listener to the select element
			document.getElementById("select-index").addEventListener("click", function() {
				// Hide the popup when the value changes
				popup.remove();  // This will remove the popup from the map
			});
			// Bind the change event listener to the select element
			document.getElementById("select-country").addEventListener("click", function() {
				// Hide the popup when the value changes
				popup.remove();  // This will remove the popup from the map
			});

		}
	});
});


/*--------------------------------------------------------------------
COLOR LEGEND SECTION
--------------------------------------------------------------------*/
//Declare legend variable using legend div tag
const legend = document.getElementById('legend');

//For each layer create a block to put the colour and label in
app.colorLegend.labels.forEach((label, i) => {
    const colour = app.colorLegend.colors[i];

    const item = document.createElement('div'); //each layer gets a 'row' - this isn't in the legend yet, we do this later
    const key = document.createElement('span'); //add a 'key' to the row. A key will be the colour circle

    key.className = 'legend-key'; //the key will take on the shape and style properties defined in css
    key.style.backgroundColor = colour; // the background color is retreived from teh layers array

    const value = document.createElement('span'); //add a value variable to the 'row' in the legend
    value.innerHTML = `${label}`; //give the value variable text based on the label

    item.appendChild(key); //add the key (colour cirlce) to the legend row
    item.appendChild(value); //add the value to the legend row

    legend.appendChild(item); //add row to the legend
});

// Change display of legend based on check box
let legendcheck = document.getElementById('legendcheck');

legendcheck.addEventListener('click', () => {
    if (legendcheck.checked) {
        legendcheck.checked = true;
        legend.style.display = 'block';
    }
    else {
        legend.style.display = "none";
        legendcheck.checked = false;
    }
});


/*--------------------------------------------------------------------
USER INPUT SECTION
--------------------------------------------------------------------*/

function selectIndex(e, id) {
	const checkbox = document.getElementById('layercheck_' + id);

	// Hide all layers first
	app.indices.forEach(index => {
		map.setLayoutProperty(index.id, 'visibility', 'none');
	});
	app.selectedIndexId = null;

	// Show one layer if selected
	if (checkbox.checked) {
		map.setLayoutProperty(id, 'visibility', 'visible');
		app.selectedIndexId = id;
	}
}

function selectCountries() {
	app.selectedCountries = [];
	
	document.querySelectorAll(".country-layer-checkbox:checked").forEach(checkbox => {
		app.selectedCountries.push(checkbox.value)
	});
	
	if (app.selectedIndexId === null) {
		console.log("No layer selected. Skipping map filter update.");
		return;
	}

	let mapFilter;

	if (app.selectedCountries.length == 0) // no countries selected
		mapFilter = ["has", "NAME"];  // then show all countries
	else if (app.selectedCountries.length === 1) // one country is selected
		mapFilter = ["==", ["get", "NAME"], app.selectedCountries[0]];  // show it
	else // multiple countries selected
		mapFilter = ["in", ["get", "NAME"], ["literal", app.selectedCountries]];

	map.setFilter(app.selectedIndexId, mapFilter);
}

function updateComparisonTable() {
	const tableDiv = document.getElementById("compare");
	
	// clear the table
	tableDiv.innerHTML = ''; 
	
	if (app.selectedIndexId === null) {
		tableDiv.innerHTML = '<h5 class="text-center">Comparison table: no data - please select an index</h5>'; 
		return;
	}
	
	let selectedIndex;
	
	for (var i = 0; i < app.indices.length; i++) {
		if (app.indices[i].id == app.selectedIndexId) {
			selectedIndex = app.indices[i];
			break;
		}
	}
	
	// get all geojson data for the selected index
	let geojson = map.queryRenderedFeatures();
	
	let html = `<h5 class="text-center">Comparison table: ${selectedIndex.name}</h5>`
	
	// table title
	html += '<table class="table table-bordered text-center table-hover">';
	
	// table header
	html += '<thead><tr>'
	html += '<th scope="col" class="text-start">Index</th>'
	app.selectedCountries.forEach(country => {
		html += `<th scope="col">${country}</th>`
	});
	html += '</tr></thead>'
	
	// table body
	html += '<tbody>'
	
	// first row: the selected index 
	html += '<tr>'
	html += `<th scope="row" class="text-start">${selectedIndex.name}</th>`
	
	app.selectedCountries.forEach(country => {
		html += `<td>fixme</td>`
	});
	
	html += '</tr>'
	
	// add a row for each sub-index
	if (selectedIndex.subindices){		
		for (var i = 0; i < selectedIndex.subindices.length; i++) {
			html += '<tr>'
		html += `<td scope="row" class="text-start">${i + 1}. ${selectedIndex.subindices[i].name}</td>`
			app.selectedCountries.forEach(country => {
				html += `<td>fixme</td>`
			});
			html += '</tr>'
		}
	}
	
	html += '</tbody>'
	html += '</table>'
	
	tableDiv.innerHTML = html;
}

// Create index selection radio buttons
app.indices.forEach(index => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox index-layer-checkbox" type="radio" name="layercheckAfrica" value="layercheck_${index.id}" id="layercheck_${index.id}" >
            <label class="form-check-label" for="layercheck_${index.id}">${index.name}</label>
        </div>`;
	let div = document.createElement('div');
	
	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectIndex(e, index.id);
		selectCountries();
		updateComparisonTable();
	});
	
	document.getElementById('index-select-menu').appendChild(div);
});

// Create country selection checkboxes
app.countries.forEach(country => {
	let html = `
		<div class="form-check mb-2">
			<input class="form-check-input layer-checkbox country-layer-checkbox" type="checkbox" name="country" value="${country}" id="${country}" >
			<label class="form-check-label" for="${country}">${country}</label>
		</div>`;
	let div = document.createElement('div');
	
	div.innerHTML = html;
	div.addEventListener('change', (e) => {
		selectCountries();
		updateComparisonTable();
	});
	
	document.getElementById('country-select-menu').appendChild(div);
});

document.addEventListener("DOMContentLoaded", function () {
	// Get the dropdown button
	const toggleButton = document.getElementById("select-index");

	// Get all radio inputs
	const radioButtons = document.querySelectorAll(".index-layer-checkbox");

	radioButtons.forEach(radio => {
		radio.addEventListener("change", function () {
			// Get the corresponding label text
			const selectedLabel = this.nextElementSibling.textContent.trim();

			// Update the button text
			toggleButton.textContent = selectedLabel;
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Get the dropdown button
	const toggleButton = document.getElementById("select-country");

	// Get all country checkboxes
	const checkboxes = document.querySelectorAll(".country-layer-checkbox");

	function updateButtonText() {
		const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
		const totalCountries = checkboxes.length;

		if (selectedCheckboxes.length === totalCountries) {
			toggleButton.textContent = "All countries selected";
		} else if (selectedCheckboxes.length === 1) {
			toggleButton.textContent = selectedCheckboxes[0].nextElementSibling.textContent.trim();
		} else {
			toggleButton.textContent = `${selectedCheckboxes.length} countries selected`;
		}
	}

	// Ensure all checkboxes are checked by default
	checkboxes.forEach(checkbox => {
		checkbox.checked = true;

		checkbox.addEventListener("change", function (event) {
			const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

			if (!this.checked && selectedCheckboxes.length === 0) {
				// Prevent unchecking if it's the last selected checkbox
				event.preventDefault();
				this.checked = true;
				return;
			}

			updateButtonText();
		});
	});

	updateButtonText(); // Initial button update
});


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
	// Get the toggle button and compare div
	const toggleButton = document.getElementById('toggle-compare');
	const compareDiv = document.getElementById('compare');

	// Add a click event listener to the toggle button
	toggleButton.addEventListener('click', function() {
		// Toggle the visibility of the compare div
		compareDiv.classList.toggle('d-none'); // 'd-none' is a Bootstrap class that hides the element
	});
});

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
		document.querySelector(".page-loader").classList.add("init");
	}, 2200);
});
