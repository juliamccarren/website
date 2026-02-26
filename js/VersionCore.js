
class VersionCore {
    static info = {"number": "18", "hash": "F5AED1"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
