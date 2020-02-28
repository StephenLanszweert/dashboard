import localForage from 'localforage';

export type PersonConfig = {
	name: string,
	backgroundImg: string
}

export type WidgetDb<T> = {
	get: () => Promise<T>,
	update: (t: T) => Promise<any>
}

export default {
	async getWidgetDb<T>(id: string, def: T): Promise<WidgetDb<T>> {
		const data = await localForage.getItem(id);

		if (data === null)
			await localForage.setItem(id, def);

		return {
			get() {
				return localForage.getItem(id)
			},
			update(t: T) {
				return localForage.setItem(id, t);
			}
		}
	},
	async personal() {
		if ((await localForage.getItem('personal')) === null)
			await localForage.setItem('personal', {});

		return {
			async getPersonal(): Promise<PersonConfig> {
				return localForage.getItem('personal');
			},
			async updatePersonal(newPersonal: any): Promise<PersonConfig> {
				console.log(newPersonal);

				const personal = await this.getPersonal();

				if (newPersonal.name)
					personal.name = newPersonal.name;

				return localForage.setItem('personal', personal);
			},
			async setPersonal(personal: PersonConfig) {
				return localForage.setItem('personal', personal);
			}
		}
	}
}
