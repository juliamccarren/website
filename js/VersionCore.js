
class VersionCore {
    static info = {"number": "23", "hash": "D91826"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
