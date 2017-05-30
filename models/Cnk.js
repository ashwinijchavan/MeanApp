var mongoose = require('mongoose');

var CnkSchema = new mongoose.Schema({
    select_project: String,
    project_assign_to: String,
    count_project_member: {
        type: Number,
        required: true
    },
    frontend_design: String,
    backend: String,
    services_used: String,
    explanation: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cnk', CnkSchema);