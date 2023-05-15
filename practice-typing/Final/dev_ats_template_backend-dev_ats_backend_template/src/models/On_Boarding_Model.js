const mongoose = require("mongoose");

const On_Boarding_Schema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    unique: true,
    index: true,
  },
  wifi_passwords: { type: Boolean },
  genrate_mail_id: { type: Boolean },
  one_drive_access: { type: Boolean },
  teams_access: { type: Boolean },
  add_to_official_dls: { type: Boolean },
  biometric: { type: Boolean },
  induction_call: { type: Boolean },
  induction_call_with: { type: String },
  acenet_laptop: { type: Boolean },
  client_laptop: { type: Boolean },
  notpad: { type: Boolean },
  t_shirt: { type: Boolean },
  welcome_kit: { type: Boolean },
  intro_slide_shared: { type: Boolean },
  aadhar_card: { type: Boolean },
  pan_card: { type: Boolean },
  passport: { type: Boolean },
  dl: { type: Boolean },
  ten_th: { type: Boolean },
  tweleve_th: { type: Boolean },
  graduation: { type: Boolean },
  post_graduation: { type: Boolean },
  pay_slips: { type: Boolean },
  experience_proof: { type: Boolean },
  forms_16: { type: Boolean },
  passport_size_photo: { type: Boolean },
  signed_offer_latter: { type: Boolean },
  documents_verification: { type: Boolean },
  covid_certificate: { type: Boolean },
  employee_data_sheet_bank_details: { type: Boolean },
  other_official_documents: { type: Boolean },
  pf_form_recieved: { type: Boolean },
  pf_submitted_to_ca_team: { type: Boolean },
  PF_number_shared_with_the_employee: { type: Boolean },
  gratuity_Form_Received: { type: Boolean },
  gratuity_Form_submitteed_to_CA_Team: { type: Boolean },
  ghi_documents_received: { type: Boolean },
  ghi_initiated: { type: Boolean },
  ghi_eCard_issued: { type: Boolean },
  hdfc_account_mapped: { type: Boolean },
  hdfc_account_initiated: { type: Boolean },
  hdfc_account_opened: { type: Boolean },
  hdfc_account_benefeciary_added: { type: Boolean },
  zoho_people_account_created: { type: Boolean },
  zoho_people_account_activated: { type: Boolean },
  zoho_payroll_integrated: { type: Boolean },
  bgv_initiated: { type: Boolean },
  bgv_invoice_Paid: { type: Boolean },
  bgv_report_Received: { type: Boolean },
  update_linkedIn: { type: Boolean },
  steper_counter: { type: Number },
  updated_by: [
    {
      type: {
        user_id: mongoose.Schema.Types.ObjectId,
        user_name: { type: String },
        updated_data: { type: Object },
        updated_date: { type: Date, default: Date.now() },
      },
    },
  ],
  status: { type: Boolean },
  hr_on_boarding_status: { type: Boolean },
  finance_on_boarding_status: { type: Boolean },
  management_on_boarding_status: { type: Boolean },
});
const On_Boarding_Model = new mongoose.model(
  "on_boarding_tbl",
  On_Boarding_Schema
);

module.exports = On_Boarding_Model;