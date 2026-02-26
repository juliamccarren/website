
class VersionCore {
    static info = {"number": "20", "hash": "7F8D96"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
