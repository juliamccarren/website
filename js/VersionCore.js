
class VersionCore {
    static info = {"number": "22", "hash": "DB5DD7"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
