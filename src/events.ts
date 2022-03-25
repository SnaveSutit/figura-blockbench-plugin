type ListenerFunction = () => void

class PluginEvent {
	listeners: ListenerFunction[] = []
	constructor() {
		this.listeners = []
	}

	addListener(func: ListenerFunction) {
		this.listeners.push(func)
	}

	trigger() {
		this.listeners.forEach(v => v())
	}
}

export const load = new PluginEvent()
export const unload = new PluginEvent()
export const install = new PluginEvent()
export const uninstall = new PluginEvent()

export const loadMods = new PluginEvent()
export const unloadMods = new PluginEvent()

load.addListener(() => loadMods.trigger())
unload.addListener(() => unloadMods.trigger())
install.addListener(() => loadMods.trigger())
uninstall.addListener(() => unloadMods.trigger())
