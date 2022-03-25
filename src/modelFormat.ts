const codec = new Codec('figura-model', {
	name: 'Figura Avatar',
	extension: 'bbmodel',
	remember: true,
	load_filter: {
		type: 'json',
		extensions: ['bbmodel'],
	},
})

export const modelFormat = new ModelFormat({
	id: 'figura-model',
	name: 'Figura Avatar',
	description: 'Avatar model format for the Figura Mod',
	icon: 'change_history',
	codec,

	animation_mode: true,
	display_mode: false,
	bone_rig: true,
	locators: true,
	meshes: true,
	optional_box_uv: true,
	box_uv: false,
	centered_grid: true,
	canvas_limit: false,
	animated_textures: false,
	single_texture: true,
	uv_rotation: true,
	integer_size: false,
	rotation_limit: false,
	rotate_cubes: true,
	show_on_start_screen: true,
})
codec.format = modelFormat
// @ts-ignore
StartScreen.vue.$forceUpdate()