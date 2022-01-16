const { setup, ref } = Vue;
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

export const Home = {
  components: {
    Navbar,
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
  components: {
    Navbar,
  },
  setup() {
    const getKeyboard = ref([]);

    (async () => {
      const res = await store.dispatch('fetchKeyboard');
      getKeyboard.value = res.data;
    })();

    return {
      getKeyboard,
    };
  },

  template: `
<Navbar/>  
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
