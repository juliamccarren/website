
class VersionCore {
    static info = {"number": "24", "hash": "2C2673"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
