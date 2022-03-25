import * as events from './events'
import { modelFormat } from './modelFormat'
import './mods'

BBPlugin.register('figura_blockbench', {
	title: 'Figura Blockbench',
	author: 'SnaveSutit',
	description: 'Adds some useful tools for developing Figura avatars',
	icon: 'change_history',
	variant: 'desktop',
	version: '1.0.0',
	min_version: '4.1.0',
	tags: ['Minecraft: Java Edition', 'Figura', 'Avatar'],
	await_loading: true,
	format: modelFormat,
	onload() {
		events.load.trigger()
	},
	onunload() {
		events.unload.trigger()
	},
	oninstall() {
		console.log(events)
		events.install.trigger()
	},
	onuninstall() {
		events.uninstall.trigger()
	},
})
