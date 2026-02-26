
class VersionCore {
    static info = {"number": "17", "hash": "B4854A"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
