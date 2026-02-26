
class VersionCore {
    static info = {"number": "19", "hash": "7F40C0"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
