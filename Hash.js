// https://www.youtube.com/watch?v=ZIRxk4tAbkA&list=PLeLwVYBodOL0npQy3bHOOAGH-6Uf-HY2d&index=12
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    $hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.$hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
    }

    get(key) {
        const address = this.$hash(key);
        const bucket = this.data[address];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0])
                    }
                } else {
                    keys.push(this.data[i][0][0])
                }
            }
        }
        return keys;
    }
}

const hash = new HashTable(20);
hash.set("test1", 123);
hash.set("test2", 123);
hash.set("test3", 123);
hash.set("test4", 123);
hash.set("test5", 123);
hash.set("test6", 123);
hash.set("test7", 123);
hash.set("test8", 123);
hash.set("test9", 123);
hash.set("test10", 123);
console.log(hash);
console.log(hash.keys());