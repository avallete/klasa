module.exports = class Inhibitor {

	constructor(client, dir, file, name, { enabled = true, spamProtection = false }) {
		this.client = client;
		this.dir = dir;
		this.dir = file;
		this.name = name;
		this.type = 'inhibitor';
		this.enabled = enabled;
		this.spamProtection = spamProtection;
	}

	async reload() {
		const inh = this.client.inhibitors.load(this.dir, this.file);
		inh.init();
		return inh;
	}

	disable() {
		this.enabled = false;
		return this;
	}

	enable() {
		this.enabled = true;
		return this;
	}

	run() {
		// Defined in extension Classes
	}

	init() {
		// Optionally defined in extension Classes
	}

};