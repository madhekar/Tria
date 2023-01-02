import { Alert } from "react-native";

export class RingBuffer <Type> {
    protected buffer: Type[] = [];
    protected sz : number;
    protected pos = 0;

    public static fromArray<Type>(data: Type[], size = 0): RingBuffer<Type> {
        const ringBuffer = new RingBuffer<Type>(size);
        RingBuffer.fromArray(data, size = 100);
        return ringBuffer;
      }
    constructor(sz: number){
        if (sz < 0){
            throw new RangeError('Invalid size');
        }
        this.sz = sz;
    }

    public add(...items: Type[]): void {
        items.forEach((item) =>{
            this.buffer[this.pos] = item;
            this.pos = (this.pos + 1 ) % this.sz;
            //Alert.alert(item.toString());
        });
    }

    public get(index: number): Type | undefined {
        if (index < 0) {
          index += this.buffer.length;
        }
    
        if (index < 0 || index > this.buffer.length) {
          return undefined;
        }
    
        if (this.buffer.length < this.sz) {
          return this.buffer[index];
        }
    
        return this.buffer[(this.pos + index) % this.sz];
      }

    public getFirst(): Type | undefined {
        return this.get(0);
      }

    public getLast(): Type | undefined {
        return this.get(-1);
      }  

      public toArray(): Type[] {
        return this.buffer.slice(this.pos).concat(this.buffer.slice(0, this.pos));
      }

      public getFirstN(n: number): Type[] {
        if (n === 0) {
          return [];
        }
        if (n < 0) {
          return this.getLastN(-n);
        }
        return this.toArray().slice(0, n);
      }  
    
      public getLastN(n: number): Type[] {
        if (n === 0) {
          return [];
        }
        if (n < 0) {
          return this.getFirstN(-n);
        }
        return this.toArray().slice(-n);
      }
    public getSize(): number {
        return this.sz;
    }

    public getBufferLength(): number {
        return this.buffer.length;
    }

    public getPos(): number{
        return this.pos;
    }

    public remove(index: number, count = 1): Type[] {
        if (index < 0) {
          index += this.buffer.length;
        }
    
        if (index < 0 || index > this.buffer.length) {
          return [];
        }
    
        const arr = this.toArray();
        const removedItems = arr.splice(index, count);
        RingBuffer.fromArray(arr);
        return removedItems;
      }
    
      /**
       * Removes the first item. Like #remove(0).
       */
      public removeFirst(): Type {
        return this.remove(0)[0];
      }
    
      /**
       * Removes the last item. Like #remove(-1).
       */
      public removeLast(): Type {
        return this.remove(-1)[0];
      }

      
    
}