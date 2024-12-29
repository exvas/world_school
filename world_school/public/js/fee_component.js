frappe.ui.form.on('Fee Component', {
    custom_net_amount: function (frm, cdt, cdn) {
        calculate_amount(frm, cdt, cdn);
    },
    custom_percentage: function (frm, cdt, cdn) {
        calculate_amount(frm, cdt, cdn);
    }
});

function calculate_amount(frm, cdt, cdn) {
    const row = locals[cdt][cdn]; // Access the current row in the child table
    if (row.custom_net_amount && row.custom_percentage) {
        const percentage = parseFloat(row.custom_percentage) || 0;
        const net_amount = parseFloat(row.custom_net_amount) || 0;
        row.amount = net_amount - (net_amount * percentage / 100); // Perform the calculation
        frm.refresh_field('fee_component'); // Refresh the table to display updated values
    }
}
