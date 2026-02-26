
class VersionCore {
    static info = {"number": "26", "hash": "B2904D"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
