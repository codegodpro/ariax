import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import GlassCard from '@/components/ui/GlassCard';

const OrderingSystem = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState('standard');
  const [subscriptionPlan, setSubscriptionPlan] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Free-Range Eggs",
      size: "Large (12 pieces)",
      price: 2500,
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Free-Range", "Organic Feed", "Daily Fresh"],
      inStock: true,
      deliveryTime: "Same Day"
    },
    {
      id: 2,
      name: "Organic Brown Eggs",
      size: "Medium (18 pieces)",
      price: 3200,
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Certified Organic", "High Protein", "Omega-3 Rich"],
      inStock: true,
      deliveryTime: "Same Day"
    },
    {
      id: 3,
      name: "Farm Fresh White Eggs",
      size: "Large (24 pieces)",
      price: 4500,
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Bulk Pack", "Family Size", "Premium Quality"],
      inStock: true,
      deliveryTime: "Same Day"
    }
  ];

  const subscriptionPlans = [
    {
      id: 'weekly',
      name: 'Weekly Delivery',
      discount: 10,
      description: 'Fresh eggs delivered every week',
      savings: 'Save ₦250/month'
    },
    {
      id: 'biweekly',
      name: 'Bi-Weekly Delivery',
      discount: 7,
      description: 'Fresh eggs delivered every 2 weeks',
      savings: 'Save ₦150/month'
    },
    {
      id: 'monthly',
      name: 'Monthly Delivery',
      discount: 5,
      description: 'Fresh eggs delivered monthly',
      savings: 'Save ₦100/month'
    }
  ];

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      time: 'Same Day (6-8 PM)',
      price: 0,
      icon: 'Truck'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      time: 'Within 4 Hours',
      price: 500,
      icon: 'Zap'
    },
    {
      id: 'scheduled',
      name: 'Scheduled Delivery',
      time: 'Choose Your Time',
      price: 200,
      icon: 'Calendar'
    }
  ];

  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    
    let subtotal = selectedProduct.price * quantity;
    let deliveryFee = deliveryOptions.find(option => option.id === deliveryType)?.price || 0;
    let discount = 0;
    
    if (subscriptionPlan) {
      const plan = subscriptionPlans.find(p => p.id === subscriptionPlan);
      discount = (subtotal * plan.discount) / 100;
    }
    
    return subtotal + deliveryFee - discount;
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    const orderData = {
      product: selectedProduct,
      quantity,
      deliveryType,
      subscriptionPlan,
      total: calculateTotal()
    };
    
    console.log('Order added to cart:', orderData);
    // Here you would typically integrate with your cart system
    alert('Product added to cart successfully!');
  };

  const handleQuickOrder = () => {
    setShowOrderForm(true);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Order Fresh Eggs Today
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Simple ordering with flexible delivery options and subscription plans
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Selection */}
          <div className="lg:col-span-2">
            <h3 className="font-headline text-xl font-bold text-primary mb-6">
              Choose Your Eggs
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`bg-card rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                    selectedProduct?.id === product.id
                      ? 'border-secondary shadow-brand-hover'
                      : 'border-transparent shadow-brand hover:shadow-brand-hover'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-surface rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                        <Icon name="Egg" size={32} className="text-secondary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-body font-semibold text-foreground">
                          {product.name}
                        </h4>
                        {product.inStock && (
                          <span className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                            In Stock
                          </span>
                        )}
                      </div>
                      
                      <p className="font-body text-sm text-text-secondary mb-2">
                        {product.size}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.features.map((feature, index) => (
                          <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-headline text-lg font-bold text-primary">
                          ₦{product.price.toLocaleString()}
                        </span>
                        <div className="flex items-center space-x-1 text-success">
                          <Icon name="Clock" size={14} />
                          <span className="font-body text-xs">{product.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity & Delivery Options */}
            {selectedProduct && (
              <div className="space-y-6">
                {/* Quantity Selection */}
                <div className="bg-card rounded-xl p-6 shadow-brand">
                  <h4 className="font-body font-semibold text-foreground mb-4">
                    Quantity & Delivery
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-2 block">
                        Quantity
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Icon name="Minus" size={16} />
                        </button>
                        <span className="font-body font-bold text-lg text-primary min-w-[3rem] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 bg-muted hover:bg-accent hover:text-accent-foreground rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Icon name="Plus" size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-2 block">
                        Delivery Option
                      </label>
                      <select
                        value={deliveryType}
                        onChange={(e) => setDeliveryType(e.target.value)}
                        className="w-full px-3 py-2 bg-input border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {deliveryOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name} - {option.time} {option.price > 0 && `(+₦${option.price})`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Subscription Plans */}
                <div className="bg-card rounded-xl p-6 shadow-brand">
                  <h4 className="font-body font-semibold text-foreground mb-4">
                    Subscription Plans (Optional)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {subscriptionPlans.map((plan) => (
                      <div
                        key={plan.id}
                        onClick={() => setSubscriptionPlan(subscriptionPlan === plan.id ? '' : plan.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          subscriptionPlan === plan.id
                            ? 'border-secondary bg-secondary/5' :'border-border hover:border-muted-foreground'
                        }`}
                      >
                        <div className="text-center">
                          <h5 className="font-body font-semibold text-foreground mb-1">
                            {plan.name}
                          </h5>
                          <p className="font-body text-xs text-text-secondary mb-2">
                            {plan.description}
                          </p>
                          <div className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                            {plan.discount}% OFF
                          </div>
                          <p className="font-body text-xs text-muted-foreground mt-1">
                            {plan.savings}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-brand sticky top-24">
              <h3 className="font-headline text-xl font-bold text-primary mb-6">
                Order Summary
              </h3>
              
              {selectedProduct ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-4 border-b border-border">
                    <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                      <Icon name="Egg" size={20} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-body font-medium text-foreground">
                        {selectedProduct.name}
                      </h4>
                      <p className="font-body text-sm text-text-secondary">
                        {selectedProduct.size} × {quantity}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-text-secondary">Subtotal</span>
                      <span className="font-body text-sm font-medium">
                        ₦{(selectedProduct.price * quantity).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-text-secondary">Delivery</span>
                      <span className="font-body text-sm font-medium">
                        ₦{deliveryOptions.find(option => option.id === deliveryType)?.price.toLocaleString() || '0'}
                      </span>
                    </div>
                    
                    {subscriptionPlan && (
                      <div className="flex justify-between text-success">
                        <span className="font-body text-sm">Subscription Discount</span>
                        <span className="font-body text-sm font-medium">
                          -₦{((selectedProduct.price * quantity * subscriptionPlans.find(p => p.id === subscriptionPlan)?.discount) / 100).toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between">
                        <span className="font-body font-semibold text-foreground">Total</span>
                        <span className="font-headline text-lg font-bold text-primary">
                          ₦{calculateTotal().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Button
                      variant="default"
                      fullWidth
                      iconName="ShoppingCart"
                      iconPosition="left"
                      onClick={handleAddToCart}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      Add to Cart
                    </Button>
                    
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Zap"
                      iconPosition="left"
                      onClick={handleQuickOrder}
                    >
                      Quick Order
                    </Button>
                  </div>
                  
                  <div className="bg-success/10 rounded-lg p-3 mt-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={16} className="text-success" />
                      <span className="font-body text-sm text-success font-medium">
                        100% Freshness Guarantee
                      </span>
                    </div>
                    <p className="font-body text-xs text-success/80 mt-1">
                      Not satisfied? Full refund within 24 hours
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon name="Egg" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="font-body text-text-secondary">
                    Select a product to see order summary
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Order Form Modal */}
        {showOrderForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-headline text-xl font-bold text-primary">
                  Quick Order
                </h3>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="w-8 h-8 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
              
              <form className="space-y-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="080XXXXXXXX"
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                />
                
                <Input
                  label="Delivery Address"
                  type="text"
                  placeholder="Enter your delivery address"
                  required
                />
                
                <div className="pt-4">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="CheckCircle"
                    iconPosition="left"
                    className="bg-conversion text-conversion-foreground hover:bg-conversion/90"
                  >
                    Place Order - ₦{calculateTotal().toLocaleString()}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderingSystem;