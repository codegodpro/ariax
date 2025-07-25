import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BookingSystem = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const services = [
    { value: 'natural-hair-care', label: 'Natural Hair Care - ₦15,000-₦35,000' },
    { value: 'protective-styling', label: 'Protective Styling - ₦8,000-₦25,000' },
    { value: 'color-highlights', label: 'Color & Highlights - ₦20,000-₦50,000' },
    { value: 'melanin-glow-facial', label: 'Melanin Glow Facial - ₦12,000-₦25,000' },
    { value: 'acne-treatment', label: 'Acne Treatment - ₦15,000-₦30,000' },
    { value: 'everyday-glam', label: 'Everyday Glam Makeup - ₦8,000-₦15,000' },
    { value: 'relaxation-massage', label: 'Relaxation Massage - ₦18,000-₦35,000' },
    { value: 'bridal-package', label: 'Complete Bridal Package - ₦80,000-₦150,000' }
  ];

  const stylists = [
    { value: 'adunni-okafor', label: 'Adunni Okafor - Master Hair Stylist' },
    { value: 'chioma-nwankwo', label: 'Chioma Nwankwo - Senior Makeup Artist' },
    { value: 'fatima-abdullahi', label: 'Fatima Abdullahi - Licensed Esthetician' },
    { value: 'tolu-adeyemi', label: 'Tolu Adeyemi - Junior Stylist' },
    { value: 'any-available', label: 'Any Available Stylist' }
  ];

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const isAvailable = Math.random() > 0.3; // Mock availability
        slots.push({
          value: time,
          label: `${time} ${isAvailable ? '✓' : '(Booked)'}`,
          disabled: !isAvailable
        });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const formattedDate = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      });
      dates.push({
        value: dateString,
        label: `${dayName}, ${formattedDate}`
      });
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookingSubmit = () => {
    // Mock booking submission
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    // Reset form
    setBookingStep(1);
    setSelectedService('');
    setSelectedStylist('');
    setSelectedDate('');
    setSelectedTime('');
    setCustomerInfo({
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  const nextStep = () => {
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    }
  };

  const prevStep = () => {
    if (bookingStep > 1) {
      setBookingStep(bookingStep - 1);
    }
  };

  const canProceedToNext = () => {
    switch (bookingStep) {
      case 1:
        return selectedService && selectedStylist;
      case 2:
        return selectedDate && selectedTime;
      case 3:
        return customerInfo.name && customerInfo.email && customerInfo.phone;
      default:
        return false;
    }
  };

  const renderBookingStep = () => {
    switch (bookingStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Select Service & Stylist
              </h3>
              <p className="font-body text-text-secondary">
                Choose the service you'd like and your preferred stylist
              </p>
            </div>

            <div className="space-y-6">
              <Select
                label="Service"
                options={services}
                value={selectedService}
                onChange={setSelectedService}
                placeholder="Select a service"
                searchable
                required
              />

              <Select
                label="Preferred Stylist"
                options={stylists}
                value={selectedStylist}
                onChange={setSelectedStylist}
                placeholder="Select a stylist"
                required
              />

              {selectedService && (
                <div className="bg-accent/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary mt-0.5" />
                    <div>
                      <h4 className="font-body font-semibold text-primary mb-2">
                        Service Information
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        This service typically takes 2-4 hours. We recommend arriving 15 minutes early for consultation.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Choose Date & Time
              </h3>
              <p className="font-body text-text-secondary">
                Select your preferred appointment date and time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Appointment Date"
                options={availableDates}
                value={selectedDate}
                onChange={setSelectedDate}
                placeholder="Select a date"
                searchable
                required
              />

              <Select
                label="Appointment Time"
                options={timeSlots}
                value={selectedTime}
                onChange={setSelectedTime}
                placeholder="Select a time"
                required
                disabled={!selectedDate}
              />
            </div>

            {selectedDate && selectedTime && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-success" />
                  <div>
                    <h4 className="font-body font-semibold text-success mb-1">
                      Appointment Summary
                    </h4>
                    <p className="font-body text-sm text-text-secondary">
                      {availableDates.find(d => d.value === selectedDate)?.label} at {selectedTime}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-body font-semibold text-primary mb-3">
                Booking Policies
              </h4>
              <ul className="font-body text-sm text-text-secondary space-y-2">
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5" />
                  <span>Free cancellation up to 24 hours before appointment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5" />
                  <span>Arrive 15 minutes early for consultation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="Check" size={16} className="text-success mt-0.5" />
                  <span>Rescheduling available with 12 hours notice</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Contact Information
              </h3>
              <p className="font-body text-text-secondary">
                Please provide your contact details for confirmation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={customerInfo.name}
                onChange={(e) => handleCustomerInfoChange('name', e.target.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={customerInfo.email}
                onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={customerInfo.phone}
                onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                required
              />
            </div>

            <Input
              label="Special Requests or Notes"
              type="text"
              placeholder="Any special requests, allergies, or preferences..."
              value={customerInfo.specialRequests}
              onChange={(e) => handleCustomerInfoChange('specialRequests', e.target.value)}
              description="Optional: Let us know about any specific needs or preferences"
            />

            {/* Booking Summary */}
            <div className="bg-gradient-luxury rounded-lg p-6 text-white">
              <h4 className="font-headline text-xl font-semibold mb-4">
                Booking Summary
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-body opacity-90">Service:</span>
                  <span className="font-body font-medium">
                    {services.find(s => s.value === selectedService)?.label.split(' - ')[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body opacity-90">Stylist:</span>
                  <span className="font-body font-medium">
                    {stylists.find(s => s.value === selectedStylist)?.label.split(' - ')[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body opacity-90">Date:</span>
                  <span className="font-body font-medium">
                    {availableDates.find(d => d.value === selectedDate)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body opacity-90">Time:</span>
                  <span className="font-body font-medium">{selectedTime}</span>
                </div>
                <div className="border-t border-white/20 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-body opacity-90">Estimated Price:</span>
                    <span className="font-body font-semibold">
                      {services.find(s => s.value === selectedService)?.label.split(' - ')[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="font-body font-semibold text-primary mb-2">
                    Privacy & Security
                  </h4>
                  <p className="font-body text-sm text-text-secondary">
                    Your personal information is kept secure and will only be used for appointment confirmation and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Book Your Appointment
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Schedule your transformation with our expert team in just a few simple steps
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-brand-hover overflow-hidden">
          {/* Progress Indicator */}
          <div className="bg-muted p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-text-secondary">
                Step {bookingStep} of 3
              </span>
              <span className="font-body text-sm text-text-secondary">
                {Math.round((bookingStep / 3) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(bookingStep / 3) * 100}%` }}
              />
            </div>
            
            {/* Step Labels */}
            <div className="flex justify-between mt-4">
              <div className={`flex items-center space-x-2 ${bookingStep >= 1 ? 'text-primary' : 'text-text-secondary'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  bookingStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary'
                }`}>
                  1
                </div>
                <span className="font-body text-sm">Service</span>
              </div>
              <div className={`flex items-center space-x-2 ${bookingStep >= 2 ? 'text-primary' : 'text-text-secondary'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  bookingStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary'
                }`}>
                  2
                </div>
                <span className="font-body text-sm">Date & Time</span>
              </div>
              <div className={`flex items-center space-x-2 ${bookingStep >= 3 ? 'text-primary' : 'text-text-secondary'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  bookingStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-text-secondary'
                }`}>
                  3
                </div>
                <span className="font-body text-sm">Contact</span>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            {renderBookingStep()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                iconName="ChevronLeft"
                iconPosition="left"
                onClick={prevStep}
                disabled={bookingStep === 1}
              >
                Previous
              </Button>

              <div className="flex space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      step === bookingStep
                        ? 'bg-primary'
                        : step < bookingStep
                        ? 'bg-success' :'bg-muted'
                    }`}
                  />
                ))}
              </div>

              {bookingStep < 3 ? (
                <Button
                  variant="default"
                  iconName="ChevronRight"
                  iconPosition="right"
                  onClick={nextStep}
                  disabled={!canProceedToNext()}
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="default"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleBookingSubmit}
                  disabled={!canProceedToNext()}
                  className="bg-conversion text-conversion-foreground hover:bg-conversion/90"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-card rounded-lg shadow-brand">
            <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">Call Us</h4>
            <p className="font-body text-sm text-text-secondary mb-3">
              Speak directly with our booking team
            </p>
            <Button variant="outline" size="sm">
              +234 xxx xxx xxxx
            </Button>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-brand">
            <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">WhatsApp</h4>
            <p className="font-body text-sm text-text-secondary mb-3">
              Quick booking via WhatsApp
            </p>
            <Button variant="outline" size="sm">
              Chat Now
            </Button>
          </div>
          
          <div className="text-center p-6 bg-card rounded-lg shadow-brand">
            <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">Visit Us</h4>
            <p className="font-body text-sm text-text-secondary mb-3">
              Walk-ins welcome (subject to availability)
            </p>
            <Button variant="outline" size="sm">
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;