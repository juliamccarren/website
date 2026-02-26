
class VersionCore {
    static info = {"number": "25", "hash": "6CAFE7"};
    
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
