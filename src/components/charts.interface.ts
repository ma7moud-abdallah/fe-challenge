export class Chart {
    labels: string[];
    datasets: {
        label: string;
        backgroundColor: string;
        borderColor: string;
        data: number[];
    }[];
    constructor(labels: string[] = ['']) {
    this.labels = labels
    this.datasets = [{
        label : "",
        backgroundColor : "#fff",
        borderColor : "#fff",
        data: []
    }]
    }
}