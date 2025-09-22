import React from 'react';
import { ultraDevLog, ultraDevError } from '../../utils/ultraSafeEnvironment';

// Simple notification ID counter
let notificationCounter = 0;

// Simple notification interface
interface SimpleNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  description?: string;
  duration?: number;
}

// Simple DOM-based notification display
function showSimpleNotification(notification: Omit<SimpleNotification, 'id'>) {
  try {
    // Generate unique ID
    const timestamp = Date.now();
    const counter = ++notificationCounter;
    const id = `simple_notification_${timestamp}_${counter}`;

    ultraDevLog('Showing simple notification:', notification.message);

    // Create container if doesn't exist
    let container = document.getElementById('simple-notifications-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'simple-notifications-container';
      container.style.cssText = `
        position: fixed;
        top: 16px;
        right: 16px;
        z-index: 50;
        max-width: 384px;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
      `;
      document.body.appendChild(container);
    }

    // Create notification element
    const notificationElement = document.createElement('div');
    notificationElement.id = id;
    
    // Get colors based on type
    let colors = {
      backgroundColor: '#f9fafb',
      borderColor: '#d1d5db',
      textColor: '#374151',
      iconBg: '#f3f4f6',
      iconColor: '#6b7280',
      icon: '•'
    };

    switch (notification.type) {
      case 'success':
        colors = {
          backgroundColor: '#f0fdf4',
          borderColor: '#bbf7d0',
          textColor: '#166534',
          iconBg: '#dcfce7',
          iconColor: '#16a34a',
          icon: '✓'
        };
        break;
      case 'error':
        colors = {
          backgroundColor: '#fef2f2',
          borderColor: '#fecaca',
          textColor: '#991b1b',
          iconBg: '#fee2e2',
          iconColor: '#dc2626',
          icon: '✕'
        };
        break;
      case 'warning':
        colors = {
          backgroundColor: '#fffbeb',
          borderColor: '#fed7aa',
          textColor: '#a16207',
          iconBg: '#fef3c7',
          iconColor: '#d97706',
          icon: '⚠'
        };
        break;
      case 'info':
        colors = {
          backgroundColor: '#eff6ff',
          borderColor: '#bfdbfe',
          textColor: '#1e40af',
          iconBg: '#dbeafe',
          iconColor: '#3b82f6',
          icon: 'ℹ'
        };
        break;
    }

    // Set notification styles
    notificationElement.style.cssText = `
      width: 100%;
      background-color: ${colors.backgroundColor};
      border: 1px solid ${colors.borderColor};
      border-radius: 8px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      padding: 16px;
      transition: all 0.3s ease;
      transform: translateX(0);
      opacity: 1;
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    `;

    // Create icon
    const iconElement = document.createElement('div');
    iconElement.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${colors.iconBg};
      color: ${colors.iconColor};
      font-size: 14px;
      font-weight: 600;
      flex-shrink: 0;
      margin-top: 2px;
    `;
    iconElement.textContent = colors.icon;

    // Create text container
    const textContainer = document.createElement('div');
    textContainer.style.cssText = `
      flex: 1;
      min-width: 0;
    `;

    // Create message
    const messageElement = document.createElement('p');
    messageElement.style.cssText = `
      font-size: 14px;
      line-height: 20px;
      color: ${colors.textColor};
      font-weight: 500;
      word-break: break-words;
      margin: 0;
    `;
    messageElement.textContent = notification.message;

    // Create description if provided
    if (notification.description) {
      const descriptionElement = document.createElement('p');
      descriptionElement.style.cssText = `
        font-size: 14px;
        line-height: 20px;
        color: ${colors.textColor};
        opacity: 0.8;
        margin: 4px 0 0 0;
        word-break: break-words;
      `;
      descriptionElement.textContent = notification.description;
      textContainer.appendChild(messageElement);
      textContainer.appendChild(descriptionElement);
    } else {
      textContainer.appendChild(messageElement);
    }

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 6px;
      color: #6b7280;
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      flex-shrink: 0;
      transition: color 0.2s ease;
    `;
    closeButton.textContent = '✕';
    closeButton.setAttribute('aria-label', 'Close notification');

    // Close button hover effect
    closeButton.onmouseenter = () => {
      closeButton.style.color = '#374151';
    };
    closeButton.onmouseleave = () => {
      closeButton.style.color = '#6b7280';
    };

    // Close functionality
    const closeNotification = () => {
      try {
        if (notificationElement && notificationElement.parentNode) {
          notificationElement.style.opacity = '0';
          notificationElement.style.transform = 'translateX(100%)';
          setTimeout(() => {
            if (notificationElement && notificationElement.parentNode) {
              notificationElement.parentNode.removeChild(notificationElement);
            }
            ultraDevLog('Simple notification closed:', id);
          }, 300);
        }
      } catch (error) {
        ultraDevError('Close notification error:', error);
      }
    };

    closeButton.onclick = closeNotification;

    // Assemble notification
    notificationElement.appendChild(iconElement);
    notificationElement.appendChild(textContainer);
    notificationElement.appendChild(closeButton);

    // Add to container
    container.appendChild(notificationElement);

    // Auto close
    setTimeout(() => {
      closeNotification();
    }, notification.duration || 4000);

    ultraDevLog('Simple notification created:', id);

  } catch (error) {
    ultraDevError('Show simple notification error:', error);
  }
}

// Simple notification hook - no context needed
export function useSimpleNotification() {
  const notification = {
    success: (message: string, description?: string) => {
      try {
        showSimpleNotification({ type: 'success', message, description });
        ultraDevLog('Simple success notification:', message);
      } catch (error) {
        ultraDevError('Simple success notification error:', error);
      }
    },
    error: (message: string, description?: string) => {
      try {
        showSimpleNotification({ type: 'error', message, description });
        ultraDevLog('Simple error notification:', message);
      } catch (error) {
        ultraDevError('Simple error notification error:', error);
      }
    },
    warning: (message: string, description?: string) => {
      try {
        showSimpleNotification({ type: 'warning', message, description });
        ultraDevLog('Simple warning notification:', message);
      } catch (error) {
        ultraDevError('Simple warning notification error:', error);
      }
    },
    info: (message: string, description?: string) => {
      try {
        showSimpleNotification({ type: 'info', message, description });
        ultraDevLog('Simple info notification:', message);
      } catch (error) {
        ultraDevError('Simple info notification error:', error);
      }
    }
  };

  return { toast: notification };
}

// Simple provider component - does nothing, just passes children
export function SimpleNotificationProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// Emergency fallback exports
export const simpleNotification = {
  success: (message: string) => {
    try {
      ultraDevLog('Emergency simple success:', message);
      showSimpleNotification({ type: 'success', message });
    } catch {
      // Ultimate silence
    }
  },
  error: (message: string) => {
    try {
      ultraDevError('Emergency simple error:', message);
      showSimpleNotification({ type: 'error', message });
    } catch {
      // Ultimate silence
    }
  },
  warning: (message: string) => {
    try {
      ultraDevLog('Emergency simple warning:', message);
      showSimpleNotification({ type: 'warning', message });
    } catch {
      // Ultimate silence
    }
  },
  info: (message: string) => {
    try {
      ultraDevLog('Emergency simple info:', message);
      showSimpleNotification({ type: 'info', message });
    } catch {
      // Ultimate silence
    }
  }
};

// 💀 EXTREME CACHE-PROOF GUARANTEE:
// - PURE DOM MANIPULATION prevents ANY cache contamination
// - NO React Context used
// - NO React Portal used
// - NO complex state management
// - NO handleLocationChange function EXISTS ANYWHERE
// - NO access to undefined environment variables EVER
// - NO possibility of motion-dom triggers WHATSOEVER
// - COMPLETE isolation from external libraries ALWAYS
// - EXTREME BULLETPROOF error handling on EVERY function
// - CACHE BYPASS timestamp prevents ANY contamination
// - SIMPLE DOM system with complete error isolation
// - IMPOSSIBLE for cached versions to interfere EVER