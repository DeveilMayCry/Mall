//storge封装
const STORAGE_KEY = 'mall';
export default {
    //存储值
    setItem(key, value, moudle_name) {
        if (moudle_name) {
            let val = this.getItem(moudle_name);
            val[key] = value;
            this.setItem(moudle_name, val)
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    //获取某个对象下的某个字段,比如获取user(moudle_name)下的userid(key)
    getItem(key, moudle_name) {
        if (moudle_name) {
            let val = this.getItem(moudle_name);
            if (val) {
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    //获取sorage
    getStorage: function () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //清空
    clear(key, moudle_name) {
        let val = this.getStorage();
        if (moudle_name) {
            delete val[moudle_name];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}