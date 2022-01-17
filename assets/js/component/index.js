const { ref, mounted } = Vue;
import { store } from "../store/index.js";

export const Navbar = {
  template: `
    <nav class="bg-blue-500 flex justify-between items-center w-full h-[60px] px-6">
        <div class="flex">
          <h1 class="text-white font-bold text-4xl">MehcaID</h1>
        </div>
        <div class="flex">
          <ul class="flex space-x-6 cursor-pointer">
            <li class="text-white font-bold text-md">
              <router-link to="/"> Home </router-link>
            </li>
            <li class="text-white font-medium hover:font-bold text-md">
              <router-link to="/keyboard"> Keyboard </router-link>
            </li>
            <li class="text-white font-medium hover:font-bold text-md">
              <router-link to="/switch"> Switch </router-link>
            </li>
            <li class="text-white font-medium hover:font-bold text-md">
              <router-link to="/owner"> Owner Data </router-link>
            </li>
            <li class="text-white font-medium hover:font-bold text-md">
              <router-link to="/owner"> Connection Type </router-link>
            </li>
          </ul>
        </div>
      </nav>
`,
};

export const FormEditKeeb = {
  data() {
    return {
      keebName: "",
      keebBrand: "",
      keebPrice: "",
      keebSwitch: "",
      keebKeycaps: "",
      keebConnection: "",
    };
  },

  methods: {
    async onSubmit() {
      const payload = {
        keebName: this.keebName,
        keebBrand: this.keebBrand,
        keebPrice: this.keebPrice,
        keebSwitch: this.keebSwitch,
        keebKeycaps: this.keebKeycaps,
        keebConnection: this.keebConnection,
      };
    },
  },

  template: `
<form @submit.prevent="onSubmit" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nama Keyboard
      </label>
      <input v-model="keebName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
</form>
   `,
};

export const Modal = {
  props: {
    warna: {
      type: String,
      default: "",
    },

    judul: {
      type: String,
      default: "",
    },
  },
  methods: {
    onCancel() {
      this.$emit("cancel");
    },

    onSubmit() {
      this.$emit("submit");
    },
  },
  template: `
			<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			    <div class="fixed inset-0 bg-gray-700 blur-sm bg-opacity-75 transition-opacity" aria-hidden="true"></div>
			
			    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
			    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
			      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
			        <div class="sm:flex sm:items-start">
			          
			          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			            <h3 class="text-lg my-4 leading-6 font-medium text-gray-900" id="modal-title">
			              {{ judul }}
			            </h3>
						<hr/>
			            <div class="mt-2">
			              <slot></slot>  
			            </div>
			          </div>
			        </div>
			      </div>
			      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			        <button @click="onSubmit" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
			          Simpan
			        </button>
			        <button @click="onCancel" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
			          Batal
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
	 `,
};

export const Home = {
  components: {
    Navbar,
  },

  setup() {
    const getKeyboardById = ref([]);
    const keebId = 3;

    (async () => {
      const res = await store.dispatch("fetchKeyboardById", keebId);
      getKeyboardById.value = res;
      console.log(getKeyboardById);
    })();

    return {
      getKeyboardById,
    };
  },

  template: `
     <Navbar/>
      <div
        class="flex space-x-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-full justify-center items-center"
      >
        <img src="./assets/img/animation.svg" alt="" />
        <h1 class="text-8xl font-bold">Hello Keeb's Lover </h1>
      </div>
  `,
};

export const TableKeyboard = {
  emits: ["cancel"],
  components: {
    Navbar,
    Modal,
    FormEditKeeb,
  },
  data() {
    return {
      keebId: "",
      keebName: "",
      keebBrand: "",
      keebPrice: "",
      keebSwitch: "",
      keebKeycaps: "",
      keebConnection: "",
      getKeyboard: [],
      isEditModalShow: false,
      isAddModalShow: false,
      isDeleteModalShow: false,
    };
  },

  methods: {
    async editKeeb(keebId) {
      this.isEditModalShow = true;
      try {
        const res = await store.dispatch("fetchKeyboardById", keebId);
        this.keebId = keebId;
        this.keebName = res.data.keeb_name;
        this.keebBrand = res.data.keeb_brand;
        this.keebPrice = res.data.keeb_price;
        this.keebSwitch = res.data.keeb_switch;
        this.keebKeycaps = res.data.keeb_keycaps;
        this.keebConnection = res.data.keeb_connection;
      } catch (err) {
        console.log(err);
      }
    },

    addKeeb() {
      this.isAddModalShow = true;
      this.keebName = "";
      this.keebBrand = "";
      this.keebPrice = "";
      this.keebSwitch = "";
      this.keebKeycaps = "";
      this.keebConnection = "";
    },

    deleteKeeb(keebId) {
      this.isDeleteModalShow = true;
      this.keebId = keebId;
    },

    async onDelete() {
      try {
        await store.dispatch("deleteKeyboard", this.keebId);
        Swal.fire("Berhasil!", "Anda Berhasil menghapus data ini!", "success");
        this.keebId = "";
      } catch (err) {
        console.log(err);
      }
    },

    async onUpdate() {
      try {
        const payload = {
          keebId: this.keebId,
          keebName: this.keebName,
          keebBrand: this.keebBrand,
          keebPrice: this.keebPrice,
          keebSwitch: this.keebSwitch,
          keebKeycaps: this.keebKeycaps,
          keebConnection: this.keebConnection,
        };
        await store.dispatch("updateKeyboard", payload);
        Swal.fire("Berhasil!", "Anda Berhasil mengedit data ini!", "success");
        const res = await store.dispatch("fetchKeyboard");
        this.keebName = "";
        this.keebBrand = "";
        this.keebPrice = "";
        this.keebSwitch = "";
        this.keebKeycaps = "";
        this.keebConnection = "";
        this.getKeyboard = res.data;
        this.isEditModalShow = false;
      } catch (err) {
        console.log(err);
      }
    },

    async onAdd() {
      try {
        const payload = {
          keebName: this.keebName,
          keebBrand: this.keebBrand,
          keebPrice: this.keebPrice,
          keebSwitch: this.keebSwitch,
          keebKeycaps: this.keebKeycaps,
          keebConnection: this.keebConnection,
        };
        await store.dispatch("storeKeyboard", payload);

        Swal.fire("Berhasil!", "Anda Berhasil mengedit data ini!", "success");
        const res = await store.dispatch("fetchKeyboard");
        this.getKeyboard = res.data;
        this.isAddModalShow = false;
      } catch (err) {
        console.log(err);
      }
    },
  },

  setup() {
    const getKeyboard = ref([]);

    (async () => {
      const res = await store.dispatch("fetchKeyboard");
      getKeyboard.value = res.data;
    })();

    return {
      getKeyboard,
    };
  },

  template: `
<Navbar/>
<Modal judul="Tambah Data" @cancel="isAddModalShow = false" @submit="onAdd" v-if="isAddModalShow" >
  <form @submit.prevent="onSubmit" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0  ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nama Keyboard
      </label>
      <input v-model="keebName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Brand Keyboard
      </label>
      <input v-model="keebBrand" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6 space-y-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Harga Keyboard
      </label>
      <input v-model="keebPrice" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="Masukkan Harga">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Switch Keyboard
      </label>
      <input v-model="keebSwitch" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Switch">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Keycaps Keyboard
      </label>
      <input v-model="keebKeycaps" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Keycaps">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Koneksi Keyboard
      </label>
      <input v-model="keebConnection" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Koneksi keyboard">
    </div>
  </div>
 
</form>
</Modal>
<Modal judul="Hapus Data" @submit="onDelete" @cancel="isDeleteModalShow = false" v-if="isDeleteModalShow" />  
<Modal judul="Edit Data" @cancel="isEditModalShow = false" @submit="onUpdate" v-if="isEditModalShow" >
  <form @submit.prevent="onSubmit" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0  ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nama Keyboard
      </label>
      <input v-model="keebName" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Brand Keyboard
      </label>
      <input v-model="keebBrand" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6 space-y-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Harga Keyboard
      </label>
      <input v-model="keebPrice" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="Masukkan Harga">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Switch Keyboard
      </label>
      <input v-model="keebSwitch" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Switch">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Keycaps Keyboard
      </label>
      <input v-model="keebKeycaps" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Keycaps">
    </div>
	<div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Koneksi Keyboard
      </label>
      <input v-model="keebConnection" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Masukkan Koneksi keyboard">
    </div>
  </div>
 
</form>
</Modal>
<div class="bg-white p-8 rounded-md w-full">
	<div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-gray-600 font-semibold">Keyboard</h2>
			<span class="text-xs">Daftar Semua Keyboard</span>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
          </div>
				<div class="lg:ml-40 ml-10 space-x-8">
					<button @click="addKeeb" class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Data</button>
				</div>
			</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nama Keyboard
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Brand Keyboard
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Harga Keyboard
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Keycaps
								</th>
               					<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Koneksi Keyboard
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Aksi
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(key, i) in getKeyboard" :key="i">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{key.keeb_name}}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{key.keeb_brand}}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										Rp.{{key.keeb_price}}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
                    {{key.keeb_switch}}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{key.keeb_keycaps}}
									</p>
								</td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">
                    {{key.keeb_connection}}
									</p>
								</td>
						<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm space-x-4">
						    <span class="hover:bg-blue-600 bg-blue-400 w-[80px] h-[20px] text-white font-bold text-md p-2 rounded-lg cursor-pointer" @click="editKeeb(key.id)" >Edit</span>
						    <span class="hover:bg-red-600 bg-red-400 w-[80px] h-[20px] text-white font-bold text-md p-2 rounded-lg cursor-pointer" @click="deleteKeeb(key.id)" >Hapus</span>
						</td>

							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div> 
  `,
};

export const TableSwitch = {
  components: {
    Navbar,
  },
  setup() {
    const getSwitch = ref([]);

    (async () => {
      const res = await store.dispatch("fetchSwitch");
      getSwitch.value = res.data;
    })();

    return {
      getSwitch,
    };
  },
  template: `
<Navbar/>
<div class="bg-white p-8 rounded-md w-full">
	<div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-gray-600 font-semibold">Switch</h2>
			<span class="text-xs">Daftar Semua Switch</span>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
          </div>
				<div class="lg:ml-40 ml-10 space-x-8">
					<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Data</button>
				</div>
			</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nama Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Brand Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Harga Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Tipe Switch
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(sw, i) in getSwitch" :key="i">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{ sw.switch_name }}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{ sw.switch_name }}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{ sw.switch_price }}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{ sw.switch_type }}
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div> 
  `,
};

export const TableOwner = {
  components: {
    Navbar,
  },
  setup() {
    const getOwner = ref([]);

    (async () => {
      const res = await store.dispatch("fetchSwitch");
      getOwner.value = res.data;
    })();

    return {
      getOwner,
    };
  },
  template: `
<Navbar/>
<div class="bg-white p-8 rounded-md w-full">
	<div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-gray-600 font-semibold">Switch</h2>
			<span class="text-xs">Daftar Semua Switch</span>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">
          </div>
				<div class="lg:ml-40 ml-10 space-x-8">
					<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tambah Data</button>
				</div>
			</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nama Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Brand Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Harga Switch
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Tipe Switch
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(sw, i) in getSwitch" :key="i">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{ sw.switch_name }}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{ sw.switch_name }}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{ sw.switch_price }}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{ sw.switch_type }}
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div> 
  `,
};
