const EmbeddedSchema = {
	Location: {
	  name: "Location",
	  properties: {
		latitude: {
		  name: "latitude",
		  type: "float",
		  indexed: false,
		  optional: false,
		  mapTo: "latitude",
		},
		longitude: {
		  name: "longitude",
		  type: "float",
		  indexed: false,
		  optional: false,
		  mapTo: "longitude",
		},
	  },
	  embedded: true,
	},
}

export default EmbeddedSchema