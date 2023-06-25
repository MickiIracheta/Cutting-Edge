export class HairSalon {
    public customers: Customer[];

    constructor(){
        this.customers = [];
    }

    public addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    public removeCustomer(customerId: number): void {
        let index;
        for(let i = 0;i &lt; this.customers.length;i++) {
            if(this.customers[i].id === customerId) {
                index = i;
                break;
            }
        }
        this.customers.splice(index, 1);
    }

    public listCustomers(): void {
        for(let customer of this.customers) {
            console.log("Name: " + customer.name + " ID: " + customer.id);
        }
    }

    public findCustomer(customerName: string): void {
        let found = false;
        for(let customer of this.customers) {
            if(customer.name === customerName) {
                console.log("Name: " + customer.name + " ID: " + customer.id);
                found = true;
            }
        }
        if(!found) {
            console.log("No customer found with the name " + customerName);
        }
    }
}

export class Customer {
    public name: string;
    public id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

export let salon = new HairSalon();

salon.addCustomer(new Customer('John', 1));
salon.addCustomer(new Customer('James', 2));
salon.addCustomer(new Customer('Mary', 3));

salon.listCustomers();

salon.findCustomer('James');

salon.removeCustomer(2);

salon.listCustomers();