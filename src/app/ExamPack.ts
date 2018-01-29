export class Model
{
    id:any;
    standard:any;
    nooftests:any;
    subject:any;
    constructor(standard,nooftests,subject,id)
    {
        this.standard  = standard;
        this.nooftests = nooftests;
        this.subject   = subject;
        this.id=id;
    }
}