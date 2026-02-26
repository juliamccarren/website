
class VersionCore {
    static info = {"number": "21", "hash": "FAC3E1"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
