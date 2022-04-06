export class Chart {
    labels: string[];
    datasets: {
        label: string;
        backgroundColor: string;
        borderColor: string;
        data: number[];
        ids: any[];
    }[];
    constructor(labels: string[] = ['']) {
    this.labels = labels
    this.datasets = [{
        label : "",
        backgroundColor : "#fff",
        borderColor : "#fff",
        data: [],
        ids: []
    }]
    }
}