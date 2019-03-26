import createStore from 'unistore'
import axios from 'axios'

const initialState = {
    listKategori: [],
    listProduk: [],
    listProdukByType: [],
    listKandang: [],
    listTransaksi:[],

    // Untuk detail produk
    nama_produk: '',
    deskripsi_produk: '',
    product_type_id:'',
    harga_produk: '',
    satuan_produk: '',
    status_produk:'',
    url_picture: '',
    produk_qty:'',
    qty:'',

    gambar:'',
    lokasi:'',

    //Produk
    kat_id: '',
    editedId:'',
    product_id:'',
    transaction_id:'',
    // Untuk transaksi
    total_qty: '',
    total_price: '',
    status_pembayaran: '',
    
    // kategori_produk:'',
    // untuk search
    keyword:'',
    isSearch:false,

    // Untuk SignUp
    // lokasi: '',
    gender: '',
    email: '',
    status: '',

    token: '',
    username: '',
    // user_status:'',
    password: '',
    // islogin: false,
    islogin: false,
    // Update User
    username_baru:'',
    password_baru:'',
    email_baru:'',
    lokasi_baru:'',

    listClientProduk:[],

    not_found: "http://foodinotech.fateta.unej.ac.id/wp-content/uploads/sites/4/2018/10/no-image-300x175.jpg"
}

// const endpoint = "http://0.0.0.0:5000"
const endpoint = "http://api.ternakku.web.id"
// const endpoint = "http://3.1.215.14"

const heroku = "https://cors-anywhere.herokuapp.com/"

const urlKategori = endpoint + "/product_type"
const urlProduk = endpoint + "/public"
const urlProdukId = endpoint + "/public/"
const urlProdukByType = endpoint + "/public/kategori"
const urlKandang = endpoint + "/user/transaction_detail"
const urlToken = endpoint + "/token?username="
const urlUser = endpoint + "/user"
const urlClientProduk = endpoint + "/client/product"
const urlLastTransaksi = endpoint + "/lasttransaction"
const urlTransaksi = endpoint + "/user/transaction"
// const urlKategori = "http://api.ternakku.web.id/product_type"
// const urlProduk = "http://api.ternakku.web.id/public"
// const urlProdukByType = "http://api.ternakku.web.id/public/kategori"
// const urlKandang = "http://api.ternakku.web.id/user/transaction_detail"
// const urlToken = "http://api.ternakku.web.id/token?username="


export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        // console.log("EVENT", event.target.value)
        return { [event.target.name]: event.target.value };
    },
    setQty: (state, value) => {
        // console.log("EVENT", event.target.value)
        return { qty: value.target.textContent };
    },

    postLogout: state => {
        return { islogin: false };
    },
    setKeyword:(state, value)=> {
        return { keyword: value}
    },
    setImage: (state, image) => {
        // console.log({ [event.target.name]: event.target.value });
        return { gambar: image };
    },

    setEditedId: (state, value) => {
        // console.log({ [event.target.name]: event.target.value });
        return { editedId: value };
    },

    setProductId: (state, value) => {
        // console.log({ [event.target.name]: event.target.value });
        return { product_id: value };
    },

    setIsSearch:(state, value) => {
        return {isSearch : value}
    },

    setkat_id: (state, value) => {
        // console.log({ [event.target.name]: event.target.value });
        return { kat_id: value };
    },

    getKategori: async (state) => {
        await axios
            .get(urlKategori)

            .then(function (response) {
                store.setState({ listKategori: response.data.data });
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getProduk: async (state) => {
        await axios
            .get(urlProduk) // + "?q=" + state.keyword
            
            .then(function (response) {
                store.setState({ listProduk: response.data.data });
                console.log("hasilnya", response.data.data);
                console.log("URL", urlProduk + "?q=" + state.keyword)
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getSearch: async (state) => {
        await axios
            .get(urlProduk + "?q=" + state.keyword) // + "?q=" + state.keyword
            
            .then(function (response) {
                store.setState({ listProduk: response.data.data });
                console.log("hasilnya", response.data.data);
                console.log("URL", urlProduk + "?q=" + state.keyword)
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getProdukId: async (state, value) => {
        await axios
            .get(urlProdukId + value)
            // Nanti jadi data
            .then(function (response) {
                console.log(response.data.data.url_picture)
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        product_id:response.data.data.id,
                        nama_produk: response.data.data.nama,
                        deskripsi_produk: response.data.data.deskripsi,
                        product_type_id: response.data.data.product_type_id,
                        harga_produk: response.data.data.price,
                        satuan_produk: response.data.data.satuan,
                        status_produk: response.data.data.status,
                        gambar: response.data.data.url_picture,
                        produk_qty: response.data.data.qty,
                        lokasi: response.data.data.lokasi
                    })}
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getProdukByType: async (state, value) => {
        await axios
            .get(urlProdukByType + "/" + value)

            .then(function (response) {
                store.setState({listProdukByType: response.data.data});
                console.log("HERE", response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    // getToken: async (state, username, password) => {
    //     // , username, password
    //     // use await, kategori
    //     await axios
    //         .get(urlToken + username + "&password=" + password)

    //         .then(function(response){
    //             store.setState({token: "Bearer " + response.data.token, islogin:true}); //, islogin:True
    //             console.log("IKI TOKEN", response.data.token)
    //         })

    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },

    postLogin: async (state) => {

        await axios
            .get(heroku + urlToken + state.username + "&password=" + state.password,
            {headers: {
                'X-Requested-With' : "http://api.ternakku.web.id",}
            },)
            .then(function (response) {
                console.log("NYOOOOH", response.data);
                if (response.data.hasOwnProperty("token")) {
                    store.setState({
                        islogin: true,
                        status: response.data.statususer,
                        token: 'Bearer ' + response.data.token,
                        // user_status: response.data.statususer,
                        
                    })
                    console.log("IKIIIIIIIIIII", state.islogin)
                    console.log("STATUS", state.status)
                }
                // this.props.getStatus()
            })
            .catch(function (error) {
                console.log(error);
            })

    },
    
    // getStatus: async (state) => {
    //     // state.getToken(username, password)
    //     console.log("IKIIIIII TOKEN E", state.token)
    //     await axios
    //         .get(heroku + urlUser ,{
    //             headers: {
    //                 Authorization : state.token,
    //                 'X-Requested-With' : "http://api.ternakku.web.id",
    //             },
    //         })
    //         .then(function (response) {
    //             store.setState({ status: response.data.status });
    //             console.log("HERE at HEADER,", response.data.status)
    //         })

    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },

    postSignUp: async (state) => {
        // const data = { username: state.username, password: state.password }
        // const self = this, , username, password
        const body = {
            "username" : state.username,
            "password" : state.password,
            "status" : state.status,
            "email" : state.email,
            "gender" : state.gender,
            "lokasi" : state.lokasi
        }
        await axios
            // .get(urlToken + "eka" + "&password=password")
            .post(heroku + urlProduk, body,
                {headers:{
                    'X-Requested-With' : "http://api.ternakku.web.id"
                }})
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        islogin: true,
                        username: response.data.data.username,
                        // password: response.data.data.password
                    })
                    
                }
                // alert("Signup Brrhasil")
            })
            .catch(function (error) {
                // state.postLogin()
                console.log(error);
            })
    },    

    getKandang: async (state) => {
        // state.getToken(username, password)
        console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .get(heroku + urlKandang ,{
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                },
            })
            .then(function (response) {
                store.setState({ listKandang: response.data.data});
                console.log("HERE at HEADER", response.data)
            })

            .catch(function (error) {
                console.log(error);
            });
    },
    
    postKandang: async (state) => {
        const body = {
            "product_id" : Number(state.product_id),
            // "product_id": Number(value),
            "qty" : Number(state.qty)
        }
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .post(heroku + urlKandang, body, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            // .then(function (response) {
            //     store.setState({ listKandang: response.data.data });
            //     console.log("HERE at HEADER")
            // })

            .catch(function (error) {
                console.log(error);
            });
    },
    
    putKandang: async (state, value) => {
        const body = {
            // "product_id" : Number(state.product_id),
            // "product_id": Number(value),
            "qty" : Number(state.qty)
        }
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .put(heroku + urlKandang + '/' + value, body, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil Update")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    delKandang: async (state, value) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .delete(heroku + urlKandang + '/' + value, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil dihapus")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getLastTransaksi: async (state) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .get(heroku + urlLastTransaksi, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        transaction_id:response.data.data.id,
                        total_qty: response.data.data.total_qty,
                        total_price: response.data.data.total_price,
                        status_pembayaran: response.data.data.status_pembayaran
                    })
                    // state.postLogin()
                }
                // this.props.getStatus()
            })

            .catch(function (error) {
                console.log(error);
            });
    },
    getTransaksi: async (state) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .get(heroku + urlTransaksi, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                store.setState({ listTransaksi: response.data.data});
                console.log("HERE at APIIIII")
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    postTransaksi: async (state, value) => {
        const body = {
            "code_pembayaran" : state.username +"123" }
        await axios
            .post(heroku + urlTransaksi + "/" + value, body, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil dibayar")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getClientProduk: async (state) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .get(heroku + urlClientProduk, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                store.setState({ listClientProduk: response.data.data });
                console.log("HERE at APIIIII")
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    postClientProduk: async (state) => {
        const body = {
            "nama" : state.nama_produk,
            "deskripsi" : state.deskripsi_produk,
            "product_type_id" : Number(state.product_type_id),
            // "product_type_id" : Number(state.kat_id),
            "price" : Number(state.harga_produk),
            "satuan" : state.satuan_produk,
            "status" : state.status_produk,
            "url_picture": state.url_picture,
            "qty" : Number(state.qty)
        }
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .post(heroku + urlClientProduk, body, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            // .then(function (response) {
            //     store.setState({ listKandang: response.data.data });
            //     console.log("HERE at HEADER")
            // })

            .catch(function (error) {
                console.log(error);
            });
    },
    
    putClientProduk: async (state, value) => {
        const body = {
            "nama" : state.nama_produk,
            "deskripsi" : state.deskripsi_produk,
            "product_type_id" : Number(state.product_type_id),
            // "product_type_id" : Number(state.kat_id),
            "price" : Number(state.harga_produk),
            "satuan" : state.satuan_produk,
            "status" : state.status_produk,
            "url_picture": state.url_picture,
            "qty" : Number(state.qty)
        }
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .put(heroku + urlClientProduk + '/' + value, body,     {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil diubah")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    delClientProduk: async (state, value) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .delete(heroku + urlClientProduk + '/' + value, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil dihapus")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    getUser: async (state) => {
        // console.log("IKIIIIII TOKEN E", state.token)
        await axios
            .get(heroku + urlUser, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                console.log("NYOOOOH", response.data);
                if (response.data.hasOwnProperty("data")) {
                    store.setState({
                        username: response.data.data.username,
                        // password: response.data.data.password,
                        email: response.data.data.email,
                        lokasi: response.data.data.lokasi,       
                    })
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },

    putUser: async (state) => {
        const body = {
            "nama" : state.username_baru,
            "password" : state.password_baru,
            "email" : state.email_baru,
            "lokasi" : state.lokasi_baru,
        }
        await axios
            .put(heroku + urlUser, body, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil Update")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    },
    delUser: async (state) => {
        await axios
            .delete(heroku + urlUser, {
                headers: {
                    Authorization : state.token,
                    'X-Requested-With' : "http://api.ternakku.web.id",
                }
            }
            )
            .then(function (response) {
                if (response.data.hasOwnProperty("data")) {
                    alert("Berhasil Dihapus")
                }
            })

            .catch(function (error) {
                console.log(error);
            });
    }
    
})