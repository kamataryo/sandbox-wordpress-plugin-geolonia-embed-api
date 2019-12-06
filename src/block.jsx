const { registerBlockType } = wp.blocks;

const Edit = props => {
	const { style, geojson } = props.attributes;

	const onStyleChange = e => props.setAttributes({ style: e.target.value });
	const onGeojsonChange = e =>
		props.setAttributes({ geojson: e.target.value });

	return (
		<>
			<div>
				<label>Style: </label>
				<input type="text" value={style} onChange={onStyleChange} />
			</div>
			<div>
				<label>GeoJSON: </label>
				<input type="text" value={geojson} onChange={onGeojsonChange} />
			</div>
		</>
	);
};

const Save = props => {
	const { style, geojson } = props.attributes;

	return (
		<div
			style={{ width: "500px", height: "500px" }}
			className={"geolonia"}
			data-style={style}
			data-geojson={geojson}
			data-key={"YOUR-API-KEY"}
		></div>
	);
};

registerBlockType("sandbox-wordpress-plugin-geolonia-embed-api/map", {
	title: "map",
	category: "common",
	attributes: {
		style: {
			type: "string",
			default: ""
		},

		geojson: {
			type: "string",
			default: ""
		}
	},
	edit: Edit,
	save: Save
});
